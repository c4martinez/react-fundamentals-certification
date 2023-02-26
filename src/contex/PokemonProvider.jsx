import { PokemonContext } from "./pokemonContext";
import { BASE_URL } from "../config";
import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  //CustomHook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  //estados simples
  const [loading, setloading] = useState(true);
  const [active, setactive] = useState(false);

  // Llamar 50 pokemones a la API
  const getPokemons = async (limit = 50) => {
    const res = await fetch(
      `${BASE_URL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setPokemons([...pokemons, ...results]);
    setloading(false);
  };

  //Obtener todos los pokemones

  const getAllPokemons = async () => {
    const res = await fetch(`${BASE_URL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setAllPokemons(results);
    setloading(false);
  };

  // llamar pokemon por id
  const getPokemonById = async (id) => {
    const res = await fetch(`${BASE_URL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getPokemons();
  }, [offset]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        pokemons,
        allPokemons,
        getPokemonById,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
