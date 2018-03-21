function getIt() {
  $('p').on('click', () => {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', () => {
    this.addClass('tasty');
  })
}

$(document).ready(function(){

// call functions here

});
