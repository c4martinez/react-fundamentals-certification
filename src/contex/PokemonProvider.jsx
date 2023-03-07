import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { BASE_URL } from "../config";

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
  const [active, setActive] = useState(false);

  // Llamar 50 pokemones a la API
  const getPokemons = async (limit = 20) => {
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

  // BTN cargar más
  const onClickLoadMore = () => {
    setOffset(offset + 50);
  };

  // filter function + state
  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  });
  const [filteredPokemons, setfilteredPokemons] = useState([]);
  const handleCheckbox = (e) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      const filteredResults = allPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setfilteredPokemons([...filteredPokemons, ...filteredResults])
    } else {
        const filteredResults = filteredPokemons.filter((pokemon) =>
        !pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setfilteredPokemons([...filteredResults])
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        pokemons,
        allPokemons,
        getPokemonById,
        onClickLoadMore,
        //loader
        loading,
        setloading,
        //btn filter
        active,
        setActive,
        // filter container checkbox
        handleCheckbox,
        filteredPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
