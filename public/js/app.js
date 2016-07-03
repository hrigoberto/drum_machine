$(document).ready(function(){
  var $Ride = $('#Ride');
  var $hiHat = $('#hiHat');
  var $kick = $('#kick');
  var $snare = $('#snare');
  var $midTom = $('#midTom');
  var $floorTom = $('#floorTom');
  var $rideNoise = document.getElementById('rideNoise');
  var $hiHatNoise = document.getElementById('hiHatNoise');
  var $kickNoise = document.getElementById('kickNoise');
  var $snareNoise = document.getElementById('snareNoise');
  var $midTomNoise = document.getElementById('midTomNoise');
  var $floorTomNoise = document.getElementById('floorTomNoise');

  $Ride.on('click', hitRide);
  $hiHat.on('click', hitHiHat);
  $kick.on('click', hitKick);
  $snare.on('click', hitSnare);
  $midTom.on('click', hitMidTom);
  $floorTom.on('click', hitFloorTom);


  function hitMidTom() {
    $midTomNoise.play();
    console.log('I worked');
  }

  function hitSnare() {
    $snareNoise.play();
    console.log('I worked');
  }

  function hitKick() {
    $kickNoise.play();
    console.log('I worked');
  }


  function hitFloorTom() {
    $floorTomNoise.play();
    console.log('I worked');
  }

  function hitHiHat() {
    $hiHatNoise.play();
    console.log('I worked');
  }

  function hitRide() {
    $rideNoise.play();
    console.log('I worked');
  }
})
