import React from "react";
import { Link } from "react-router-dom";

import classes from "./Pokemon.module.css";

const Pokemon = ({ pokemon }) => {
  return (
    <div className={classes.pokecard}>
      <Link to={`/pokemon/${pokemon.name}`} className={classes.pokelink} >{pokemon.name} </Link>
    </div>
  );
};

export default Pokemon;
