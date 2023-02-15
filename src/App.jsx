import { useState, useEffect } from 'react';
import { pokemonApi } from './api/poke_api';
import './style.module.css';

function App() {
  const [pokemon, setPokemon] = useState([])

  async function loadPokemon(){
    const popularPokemonList = await pokemonApi.loadPokemon();
    setPokemon(popularPokemonList,[]);
  }

  useEffect(() => {
    loadPokemon();
  }, []);

  

  return (
    <div>
      
    </div>
  );
}

export default App
