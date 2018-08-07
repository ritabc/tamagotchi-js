import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import '../.env'
$(document).ready(function() {
  $('#addNewAnimal').click(function() {
  let type = 'cute pig';
    // let city = $('#location').val();
  $('#location').val("");

  let request = new XMLHttpRequest();
  let url = `http://api.giphy.com/v1/gifs/random?api_key=${API}&tag=${type}&rating=g`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      getElements(response);
    }
  }

  request.open("GET", url, true);
  request.send();

  getElements = function(response) {
    $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  }
});


});
