import { findByPokemon, getPokeArray, caught, encounter, setPoke } from '../utils.js';
import { pokemon } from '../pokemon.js';
const test = QUnit.test;

test('getPoke returns POKEARRAY from localStorage', (expect)=>{

    const pokeArray = [
        { pokemon: 'bulbasaur', encounter: 1, caught: 1 },
        { pokemon: 'charmander', encounter: 1, caught: 1 },
        { pokemon: 'squirtle', encounter: 2, caught: 1 }
    ];
    localStorage.setItem('POKEARRAY', JSON.stringify(pokeArray));

    const actual = getPokeArray();

    expect.deepEqual(actual, pokeArray);
});

test('getPoke returns empty if none in localStorage', (expect)=>{
    
    localStorage.removeItem('POKEARRAY');

    const actual = getPokeArray();

    expect.deepEqual(actual, []);
});

test('encounter increments when pokemon comes up', (expect)=>{
    const results = [
        { pokemon: 'bulbasaur', encounter: 0, caught: 0 }
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));
    const expected = [
        { pokemon: 'bulbasaur', encounter: 1, caught: 0 }
    ];

    encounter('bulbasaur');
    const actual = getPokeArray();

    expect.deepEqual(actual, expected);
});

test('capturePoke increments when chosen', (expect)=>{
    const results = [
        { pokemon: 'bulbasaur', encounter: 1, caught: 0 },
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));
    const expected = [
        { pokemon: 'bulbasaur', encounter: 1, caught: 1 },
    ];

    caught('bulbasaur');
    const actual = getPokeArray();

    expect.deepEqual(actual, expected);
});

test('setPoke sets a pokemon in localStorage', (expect)=>{
    const results = [
        { pokemon: 'bulbasaur', encounter: 1, caught: 0 },
    ];
    setPoke(results);
    const actual = getPokeArray();

    expect.deepEqual(actual, results);

});