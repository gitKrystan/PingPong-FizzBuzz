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
    var userNumber = parseInt($('#userNumber').val());
    if (!validateInput(userNumber)) {
      alert("Please enter an integer greater than zero.");
    } else {
      $('ul#pingPongList').append('<li>' + userNumber + '</li>');
    }
  });
});