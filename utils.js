

export function findByPokemon(pokes, pokemon){

    for (let poke of pokes) {
        if (poke.pokemon === pokemon){
            return poke;
        }
    }
}

export function getPokeArray(){
    
    const pokeArrayString = localStorage.getItem('POKEARRAY') || '[]';
    const pokeArray = JSON.parse(pokeArrayString);

    return pokeArray;
}


export function encounter(pokemon){
    let pokeArray = getPokeArray();
    let foundPoke = findByPokemon(pokeArray, pokemon);

    if (foundPoke){
        foundPoke.encounter++;

    } else {
        const newPoke = {
            pokemon: pokemon,
            encounter: 1,
            caught: 0
        };

        pokeArray.push(newPoke);
    }
    
    localStorage.setItem('POKEARRAY', JSON.stringify(pokeArray));
}

// export function setPoke(pokeArray){
//     const arrayString = JSON.stringify(pokeArray);
//     localStorage.setItem('POKEMON', arrayString);
// }


export function caught(pokemon){
    let pokeArray = getPokeArray();
    let foundPoke = findByPokemon(pokeArray, pokemon);
    
    foundPoke.caught++;

    localStorage.setItem('POKEARRAY', JSON.stringify(pokeArray));
}