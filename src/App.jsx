import { useState, useEffect } from 'react';
import { AppRouter } from '../AppRouter';
import { pokemonApi } from './api/poke_api';
import { PokemonProvider } from './contex/PokemonProvider';

// function App() {
//   const [pokemon, setPokemon] = useState([])

//   async function loadPokemon(){
//     const popularPokemonList = await pokemonApi.loadPokemon();
//     setPokemon(popularPokemonList,[]);
//   }

//   useEffect(() => {
//     loadPokemon();
//   }, []);

  

//   return <AppRouter />
// }

function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  );
}

export default App
