import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#addNewAnimal').click(function() {
    let type = 'cute+farm+pig';
    // let city = $('#location').val();
  // $('#location').val("");
    let rating = 'g'

    let request = new XMLHttpRequest();
    let url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=${type}&rating=${rating}`;
    console.log(url)

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        showGif(response);
      }
    }

  request.open("GET", url, true);
  request.send();

  const showGif = function(response) {
    $("#test-image").attr('src', response.data.images.fixed_width.url)
    // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  }
  });
});
