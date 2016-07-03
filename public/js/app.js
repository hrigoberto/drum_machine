$(document).ready(function(){
  var $Ride = $('#Ride');
  var $rideNoise = document.getElementById('rideNoise');


  $Ride.on('click', makeSound);

  function makeSound() {
    $rideNoise.play();
    console.log('I worked');
  }
})
