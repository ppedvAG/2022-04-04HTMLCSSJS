const submit = document.querySelector("#search");
const pokeName = document.querySelector("#pokemon");
const table = document.querySelector("#pokeTable");
const apiPath = "https://pokeapi.co/api/v2/pokemon/";


async function searchPokemon() {
    let rawData = await fetch(apiPath + pokeName.value);
    pokeData = await rawData.json();
    addToTable(pokeData);
}

function addToTable(pokemon) {
    const row = table.insertRow();
    row.insertCell().innerText = pokemon.name;
    row.insertCell().innerText = pokemon.base_experience;
    row.insertCell().innerText = pokemon.abilities.length;
    let img = document.createElement("img");
    img.src = pokemon.sprites.front_shiny;
    img.alt = pokemon.name;
    row.insertCell().appendChild(img);
}

submit.addEventListener("click", searchPokemon);