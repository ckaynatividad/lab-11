import { pokemon } from './pokemon.js';
import { capturePoke, encounter } from './utils.js';
console.log(pokemon);

const caughtSpan = document.getElementById('caught');
const chosenSpan = document.getElementById('chosen');
const appearSpan = document.getElementById('appeared');

const poke1input = document.getElementById('poke1');
const poke2input = document.getElementById('poke2');
const poke3input = document.getElementById('poke3');
const pokeImg1 = document.getElementById('poke1-img');
const pokeImg2 = document.getElementById('poke2-img');
const pokeImg3 = document.getElementById('poke3-img');
const button = document.getElementById('select');

let caught = 0;
let chosen = 0;
let appeared = 0;

let rando1 = 0;
let rando2 = 0;
let rando3 = 0;

const generatePoke = ()=>{
    rando1 = Math.floor(Math.random() * pokemon.length);
    rando2 = Math.floor(Math.random() * pokemon.length);
    rando3 = Math.floor(Math.random() * pokemon.length);

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
    // poke1input.value = pokemon[rando1].pokemon;
    pokeImg1.src = poke1.url_image;

    let poke2 = pokemon[rando2];
    // poke2input.value = pokemon[rando2].pokemon;
    pokeImg2.src = poke2.url_image;

    let poke3 = pokemon[rando3];
    // poke2input.value = pokemon[rando3].pokemon;
    pokeImg3.src = poke3.url_image;
    return [
        poke1,
        poke2,
        poke3
    ];
};


let pokemonGen = generatePoke();
console.log(pokemonGen);
encounter(pokemonGen[0]);
encounter(pokemonGen[1]);
encounter(pokemonGen[2]);

console.log(pokemonGen);
console.log(encounter(pokemonGen[0]));
button.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    let chosen = pokemonGen[selected.value];
    capturePoke(chosen.pokemon);
    console.log(chosen.pokemon);
});

