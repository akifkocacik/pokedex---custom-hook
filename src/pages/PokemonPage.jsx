import React from "react";
import usePokemon from "../hooks/usePokemon";
import { useParams } from "react-router-dom";

import classes from "./PokemonPage.module.css";

const PokemonPage = () => {
  const { name } = useParams();
  const { pokemon, loading, error } = usePokemon(name);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={classes.card}>
      <div className={classes.pokename}>Name: {pokemon.name}</div>

      <div className={classes.pokeimg}>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
      </div>
      <div className={classes.poketype}>Type: {pokemon.types[0].type.name}</div>
      <div className={classes.pokeheight}>Height: {pokemon.height}</div>
      <div className={classes.pokeweight}>Weight: {pokemon.weight}</div>
    </div>
  );
};

export default PokemonPage;
