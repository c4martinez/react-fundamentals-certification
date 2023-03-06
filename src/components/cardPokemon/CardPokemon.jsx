import React from "react";
import { Link } from "react-router-dom";
import s from './style.module.css';

export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`pokemon/${pokemon.id}`} className={s.cardPokemon}>
      <div className="contenedor">
      <div className={s.cardImg}>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className={s.cardInfo}>
        <span className={s.pokemonId}>N° {pokemon.id}</span>
        <h3>{pokemon.name}</h3>
        <div className={s.cardTypes}>
          {pokemon.types.map(type => (
            <span key={type.type.name} className={type.type.name}>
                {type.type.name}
            </span>
          ))}
        </div>
      </div>
      </div>
    </Link>
  );
};

export default CardPokemon;
