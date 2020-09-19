const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
//let url;

let generateBtn = document.querySelector(".submit-btn");
let input = document.querySelector(".search-input");
let form = document.querySelector(".search-form");
let section = document.querySelector("section");

form.addEventListener("submit", getPokemon);


function getPokemon(e) {
    e.preventDefault();

    let url = baseURL + input.value


    fetch(url)
        .then(response => response.json())
        .then(json => displayImage(json));


    function displayImage(data) {
        console.log(data);
        let img = document.querySelector('.card-img-top')
        let name = document.querySelector('.card-title')

        img.src = data.sprites.front_default;
        name.innerText = data.name



    }
}