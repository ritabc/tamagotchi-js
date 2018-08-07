import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Farm } from './farm.js';
import { Animal } from './animal.js'

$(document).ready(function() {
  let newFarm = new Farm();
  $('#add-animal').submit(function(e) {
    e.preventDefault();
    let type = $('#type').val()
    let name = $('#name').val()
    let rating = 'g'
    let request = new XMLHttpRequest();
    let url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=${type}&rating=${rating}`;
    let newAnimal = new Animal(name);
    newFarm.allAnimals.push(newAnimal);
    console.log(newFarm.allAnimals[0]);

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        showGif(response);
      }
    }

  request.open("GET", url, true);
  request.send();

  const showGif = function(response) {
    $("#theFarm").prepend(`<h1>${newAnimal.name}</h1><img src=${response.data.images.fixed_width.url}><button value=${newFarm.allAnimals.indexOf(newAnimal)}>test</button>`)

    // $("#test-image").attr('src', response.data.images.fixed_width.url)
    // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  }
  });
});
