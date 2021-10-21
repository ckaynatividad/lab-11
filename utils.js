

export function findByPokemon(pokemon, pokes){

    for (let poke of pokes) {
        if (poke.pokemon === pokemon){
            return poke;
        }
    }
}

import { pokemon } from './pokemon.js';

export function getPoke(){
    
    const pokeString = localStorage.getItem('POKEMON') || '[]';
    const poke = JSON.parse(pokeString);

    return poke;
}


export function encounter(pokemon){
    let pokeArray = getPoke();
    let foundPoke = findByPokemon(pokemon, pokeArray);

    if (foundPoke){
        foundPoke.encounter++;

    } else {
        const newPoke = {
            pokemon: pokemon.pokemon,
            encountered: 1,
            captured: 0
        };

        pokeArray.push(newPoke);
    }
    
    return setPoke(pokeArray);
}

export function setPoke(pokeArray){
    const arrayString = JSON.stringify(pokeArray);
    localStorage.setItem('POKEMON', arrayString);
}


export function capturePoke(pokemon){
    let pokeArray = getPoke();
    let foundPoke = findByPokemon(pokemon, pokeArray);
    
    if (foundPoke){
        foundPoke.captured++;
    } else {
        const newPoke = {
            pokemon: pokemon.pokemon,
            encountered: 1,
            captured: 0
        };

        pokeArray.push(newPoke);
    }
    return setPoke(pokeArray);
}