function getIt() {
  $('p').on('click', () => {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', () => {
    $('img').addClass('tasty');
  })
}

function submitIt() {
  $('form').on('submit', () => {
    alert('Your form is going to be submitted now.');
    return;
  }) 
}

function pressIt() {
  $('input').on('keydown');
}

$(document).ready(function(){

// call functions here

});
