"use client";

import Navbar from "@/components/Navbar";
import Pokedex from "@/components/Pokedex";
import SearchBar from "@/components/SearchBar";
import { getPokemons, getPokemonsData, searchPokemon } from "@/utils/api";
import { useEffect, useState } from "react";
import { FavoriteProvider } from "./contexts/favoritesContext";
const favoritesKey = "pokemonsKey";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const itensPerPage = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      alert("fetchPokemons erro: ", error);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updateFavorites.splice(favoriteIndex, 1);
    } else updateFavorites.push(name);
    window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      fetchPokemons();
    } else {
      setLoading(true);
      setNotFound(false);
      const result = await searchPokemon(pokemon);
      if (!result) {
        setNotFound(true);
      } else {
        setPokemons([result]);
      }
      setLoading(false);
    }
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div className="container mx-auto p-3">
        <Navbar />
        <SearchBar onSearchHandler={onSearchHandler} />
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </FavoriteProvider>
  );
}
