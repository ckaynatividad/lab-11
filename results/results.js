import { pokemon } from '../pokemon.js';
import { getPokeArray, findByPokemon } from '../utils.js';

const pokeArray = getPokeArray();

const main = document.getElementById('main');

for (let one of pokeArray){
    const poke = findByPokemon(pokemon, one.pokemon);
    const divCon = document.createElement('div');
    const header = document.createElement('h3');
    header.textContent = poke.pokemon;
    const img = document.createElement('img');
    img.src = poke.url_image;
    const div = document.createElement('div');
    const p = document.createElement('p');
    const resultSpan = document.createElement('span');
    resultSpan.textContent = `Encounters: ${one.encounter} `;
    const resultSpan2 = document.createElement('span');
    resultSpan2.textContent = `Captured: ${one.caught}`;
    p.append(resultSpan, resultSpan2);
    p.classList.add('results-text');
    div.append(header, img, p);

    divCon.append(div);
    main.append(divCon);
}

const pokeNames = pokeArray.map((one)=>{
    const poke = findByPokemon(pokemon, one.pokemon);
    return poke.pokemon;
});

const captured = pokeArray.map(one=>one.caught);
const encountered = pokeArray.map(one=>one.encounter);


var ctx = document.getElementById('resultsChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeNames,
        datasets: [{
            data: captured,
            backgroundColor :'rgba(91,219,52,0.31)',
            borderColor : 'rgba(136,136,136,0.5)',
            label:'captured'},
        
        {
            data : encountered,
            backgroundColor :'rgba(46,127,204,0.27)',
            borderColor : '#aaaaaa',
            label:'encountered'
        }
        ],
        borderWidth: 1
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
