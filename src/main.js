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

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        showGif(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const showGif = function(response) {
      $("#theFarm").prepend(`<h1>${newAnimal.name}</h1><img src=${response.data.images.fixed_width.url}><button id=${newFarm.allAnimals.indexOf(newAnimal)} class='hunger regular'>Feed Regular</button>`)
    }
  });
  $('#theFarm').on('click', `.hunger.regular`, function(e) {
    e.preventDefault()
    console.log("Reached")
    console.log(this)
    console.log(this.id)
    // let animalIndex = $(this.;
  })
});

// $('.hunger').click(function(event) {
//   event.preventDefault();
//   console.log("Reached");
//   console.log($(".hunger.regular").val());
// });
