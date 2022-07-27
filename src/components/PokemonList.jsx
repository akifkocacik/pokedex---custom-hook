import usePokemon from "../hooks/usePokemon";
import Pokemon from "./Pokemon";
import { useState } from "react";

const PokemonList = () => {
  const { pokemons, loading, error, loadNextPokemons } = usePokemon();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.name} pokemon={pokemon} />;
      })}
      <button onClick={loadNextPokemons}>Next Pokemons</button>
    </div>
  );
};

export default PokemonList;
