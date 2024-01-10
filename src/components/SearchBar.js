import React, { useState } from "react";
import { searchPokemon } from "@/utils/api";

const SearchBar = ({ onSearchHandler }) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(() => e.target.value.toLowerCase());
    if (e.target.value === 0) {
      onSearchHandler(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search.toLowerCase());
    setSearch("");
  };

  return (
    <div>
      <div className="flex flex-row justify-center gap-8 ">
        <input
          type="text"
          placeholder="Buscar Pokemon ..."
          value={search}
          onChange={onChangeHandler}
          className="w-56 border border-blue-400 m-1 p-2 rounded-md text-xs text-black shadow-md shadow-blue-300 outline-none"
        />
        <button
          onClick={onButtonClickHandler}
          className="w-24 h-8 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 text-white rounded-xl text-xs mt-1"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
