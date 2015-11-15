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

var generatePingPongs = function(inputNumber) {
  var pingPongs = [];
  for (var i = 1; i <= inputNumber; i++) {
    pingPongs.push(i);
  }
  return pingPongs;
};

$(document).ready(function() {
  $('button').click(function() {
    var userNumber = parseInt($('#userNumber').val());
    if (!validateInput(userNumber)) {
      alert("Please enter an integer greater than zero.");
    } else {
      generatePingPongs(userNumber);
      $('ul#pingPongList').append('<li>' + userNumber + '</li>');
    }
  });
});