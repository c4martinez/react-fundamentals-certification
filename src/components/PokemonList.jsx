import React, { useContext } from "react";
import { PokemonContext } from "../contex/pokemonContext";
import CardPokemon from "./CardPokemon";

function PokemonList() {
  const { pokemons } = useContext(PokemonContext);
  return (
    <>
      <div className="card-list-pokemon container">
        {pokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
