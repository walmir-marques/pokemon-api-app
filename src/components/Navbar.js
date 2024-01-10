import FavoriteContext from "@/app/contexts/favoritesContext";
import React, { useContext } from "react";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg";

  return (
    <nav className="flex flex-row h-14 justify-evenly">
      <div className="w-32">
        <img src={logoImg} alt="pokeapi logo" />
      </div>
      <div>Favoritos {favoritePokemons.length}❤️</div>
    </nav>
  );
};

export default Navbar;
