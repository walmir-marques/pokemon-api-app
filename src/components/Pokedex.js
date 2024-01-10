import React from "react";
import Pokemon from "./Pokemon";
import { Pagination } from "./Pagination";

const Pokedex = ({ pokemons, loading, page, totalPages, setPage }) => {
  const onPreviousClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onNextClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="flex justify-between text-xs mt-3">
        <h1>Pokemons</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onPreviousClick={onPreviousClickHandler}
          onNextClick={onNextClickHandler}
        />
      </div>
      {loading ? (
        <div>Nosso pokemons estão chegando ... </div>
      ) : (
        <div className="grid mx-5 sm:grid-cols-3 gap-3 mt-6">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon pokemon={pokemon} key={index} />;
            })}
        </div>
      )}
      <div className="flex justify-between text-xs mt-5">
        <h1>Pokemons</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onPreviousClick={onPreviousClickHandler}
          onNextClick={onNextClickHandler}
        />
      </div>
    </div>
  );
};

export default Pokedex;
