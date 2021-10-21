

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
            captured: 0
        };

        pokeArray.push(newPoke);
    }
    
    localStorage.setItem('POKEARRAY', JSON.stringify(pokeArray));
}

// export function setPoke(pokeArray){
//     const arrayString = JSON.stringify(pokeArray);
//     localStorage.setItem('POKEMON', arrayString);
// }


export function capturePoke(pokemon){
    let pokeArray = getPokeArray();
    let foundPoke = findByPokemon(pokeArray, pokemon);
    
    foundPoke.captured++;
    // if (foundPoke){
    //     foundPoke.captured++;
    // } else {
    //     const newPoke = {
    //         pokemon: pokemon.pokemon,
    //         encountered: 1,
    //         captured: 0
    //     };

    //     pokeArray.push(newPoke);
    // }
    localStorage.setItem('POKEARRAY', JSON.stringify(pokeArray));
}