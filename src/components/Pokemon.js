import FavoriteContext from "@/app/contexts/favoritesContext";
import React, { useContext } from "react";

const Pokemon = ({ pokemon }) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const returnColor = (type) => {
    switch (type) {
      case "grass":
        return "green";
      case "water":
        return "blue";
      case "fire":
        return "red";
      case "electric":
        return "yellow";
      case "poison":
        return "purple";
      case "ground":
        return "brown";
      case "rock":
        return "gray";
      case "dark":
        return "black";
      case "normal":
        return "white";
      case "ice":
        return "lightblue";
      case "bug":
        return "greenyellow";
      case "fighting":
        return "orange";
      case "dragon":
        return "darkblue";
      case "psychic":
        return "DarkMagenta";
      case "ghost":
        return "DimGray";
      case "steel":
        return "silver";
      case "flying":
        return "DeepSkyBlue";
      // Adicione outros casos conforme necessário
      default:
        return "pink"; // Cor padrão para tipos não mapeados
    }
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🤍";
  const cor = returnColor(pokemon.types[0].type.name);
  console.log(cor);

  return (
    <div
      className={`flex flex-row items-center shadow-lg border border-blue-50 shadow-${cor}-300 outline-none`}
      style={{
        boxShadow: ` -6px 8px 14px -5px ${cor}`,
      }}
    >
      <div>
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="w-16"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between">
          <h3 className="ml-4">{pokemon.name}</h3>
          <div className="mr-2">#{pokemon.id}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            {pokemon.types.map((type, index) => {
              return (
                <div
                  className="border border-blue-100 rounded-md px-1  text-sm"
                  key={index}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>

          <button className="mr-2" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
