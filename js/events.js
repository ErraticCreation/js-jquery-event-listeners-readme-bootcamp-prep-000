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
    alert('Your form is going to be sumbitted now.');
  }) 
}

$(document).ready(function(){

// call functions here

});
