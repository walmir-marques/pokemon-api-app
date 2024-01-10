export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Pokémon não encontrado para ${pokemon}`);
    }

    return await response.json();
  } catch (error) {
    alert("erro: ", error);
  }
};
export const getPokemons = async (itemsPerPage, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Pokémon não encontrado para ${pokemon}`);
    }

    return await response.json();
  } catch (error) {
    alert("erro: ", error);
  }
};

export const getPokemonsData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Pokémon não encontrado para ${pokemon}`);
    }

    return await response.json();
  } catch (error) {
    alert("erro: ", error);
  }
};
