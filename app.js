import { pokemon } from './pokemon.js';
import { caught, encounter } from './utils.js';
// console.log(pokemon);



const poke1input = document.getElementById('poke1');
const poke2input = document.getElementById('poke2');
const poke3input = document.getElementById('poke3');
const pokeImg1 = document.getElementById('poke1-img');
const pokeImg2 = document.getElementById('poke2-img');
const pokeImg3 = document.getElementById('poke3-img');
const button = document.getElementById('select');


const generatePoke = ()=>{
    let rando1 = Math.floor(Math.random() * pokemon.length);
    let rando2 = Math.floor(Math.random() * pokemon.length);
    let rando3 = Math.floor(Math.random() * pokemon.length);

    while (
        rando1 === rando2 ||
    rando1 === rando3 || 
    rando2 === rando3
    ) {
        rando1 = Math.floor(Math.random() * pokemon.length);
        rando2 = Math.floor(Math.random() * pokemon.length);
        rando3 = Math.floor(Math.random() * pokemon.length);
    }

    let poke1 = pokemon[rando1];
    encounter(poke1.pokemon);
    pokeImg1.src = poke1.url_image;
    poke1input.value = poke1.pokemon;

    let poke2 = pokemon[rando2];
    encounter(poke2.pokemon);
    pokeImg2.src = poke2.url_image;
    poke2input.value = poke2.pokemon;

    let poke3 = pokemon[rando3];
    encounter(poke3.pokemon);
    pokeImg3.src = poke3.url_image;
    poke3input.value = poke3.pokemon;
    // return [
    //     poke1,
    //     poke2,
    //     poke3
    // ];
};

let totalPlays = 0;
generatePoke();
// let pokemonGen = generatePoke();
// console.log(pokemonGen);
// encounter(pokemonGen[0]);
// encounter(pokemonGen[1]);
// encounter(pokemonGen[2]);


button.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    
    if (selected){
        const chosen = selected.value;
        totalPlays++;
        caught(chosen);
        if (totalPlays >= 10){
            window.location = './results';
        } else {
            generatePoke();
        }
    }
    // let chosen = pokemonGen[selected.value];
    // capturePoke(chosen.pokemon);
});

