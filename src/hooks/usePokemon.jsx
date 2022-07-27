import { useEffect, useState } from "react";
import axios from "axios";

const usePokemon = (name) => {
  const [data, setData] = useState({
    pokemon: null,
    pokemons: null,
    error: null,
  });

  const [offset, setOffset] = useState(0);

  const loadNextPokemons = () => {
    setOffset(offset + 20);
  }

  const fetchData = async (name) => {
    let url;
    if (!name) {
      url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    } else {
      url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    }
    axios
      .get(url)
      .then(function (response) {
        if (!name) {
          setData({
            ...data,
            pokemons: response.data.results,
          });
        } else {
          setData({
            ...data,
            pokemon: response.data,
          });
        }
      })
      .catch((err) => {
        setData({
          ...data,
          error: err.message,
        });
      });
  };

  useEffect(() => {
    fetchData(name);
  }, [name, offset]);

  return {
    pokemon: data.pokemon,
    pokemons: data.pokemons,
    error: data.error,
    loading: !data.error && !data.pokemon && !data.pokemons,
    loadNextPokemons,
  };
};

export default usePokemon;
