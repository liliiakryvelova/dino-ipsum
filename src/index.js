import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dinoservice from './Dino-service.js';


$(document).ready(function () {
  let promise = Dinoservice.getFakeDino();
  promise.then(function (response) {
    const body = JSON.parse(response);

    let dinoArray = [];
    for (let i = 0; i <= body.length - 1; i++) {
      dinoArray.push(body[i]);
    }
    $('#output1').text(dinoArray[0]);
    $('#output2').text(dinoArray[1]);
  });
});

