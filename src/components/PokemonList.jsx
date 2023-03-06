import React, { useContext } from "react";
import { PokemonContext } from "../contex/pokemonContext";
import CardPokemon from "./cardPokemon/CardPokemon";
import Loader from "./Loader";

function PokemonList() {
  const { pokemons, loading, filteredPokemons } = useContext(PokemonContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon container">
          {filteredPokemons.length ? (
            <>
              {filteredPokemons.map(pokemon => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {pokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default PokemonList;
