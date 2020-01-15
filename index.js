'use strict';

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/3`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}
function submitForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImage();
    });
  }


  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    submitForm();
  });