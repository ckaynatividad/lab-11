import { pokemon } from '../pokemon.js';
import { getPoke, findByPokemon } from '../utils.js';

const results = getPoke();

const main = document.getElementById('main');

for (let result of results){
    const poke = findByPokemon(pokemon, result.pokemon);
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src - `../${pokemon.url_image}`;
    const resultSpan = document.createElement('span');
    resultSpan.textContent = `Encountered: ${result.encounter}`;
    const resultSpan2 = document.createElement('span');
    resultSpan2.textContent = `Captured: ${result.captured}`;

    div.append(img, resultSpan2, resultSpan2);
    main.append(div);
}

const pokeNames = results.map((poke)=>{
    return poke.pokemon;
});

const captured = results.map(poke=>poke.captured);


var ctx = document.getElementById('resultsChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeNames,
        datasets: [{
            label: '# of Times Captured',
            data: captured,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
