// selectors
$(document).ready(function () {
  $('button').click(function () {
    $('p:first').css('background-color', 'blue');
    $('p:last').css('background-color', 'red');
    $('h1').css('background-color', '#ddd');
  });
});
