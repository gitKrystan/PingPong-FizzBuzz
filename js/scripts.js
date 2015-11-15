/**
 * Created by kmenne on 11/14/15.
 */

var validateInput = function(userInput) {
  if (typeof(userInput) === 'number') {
    return (userInput >= 1);
  } else {
    return false;
  }
};

$(document).ready(function() {
  $('button').click(function() {
    var userNumber = $('#userNumber').val();
    $('ul#pingPongList').append('<li>' + userNumber + '</li>');
  });
});