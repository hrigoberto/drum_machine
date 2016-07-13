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
    $midTomNoise.load();
    $midTomNoise.play();
    console.log('I worked');
  }

  function hitSnare() {
    $snareNoise.load();
    $snareNoise.play();
    console.log('I worked');
  }

  function hitKick() {
    $kickNoise.load();
    $kickNoise.play();
    console.log('I worked');
  }


  function hitFloorTom() {
    $floorTomNoise.load();
    $floorTomNoise.play();
    console.log('I worked');
  }

  function hitHiHat() {
    $hiHatNoise.load();
    $hiHatNoise.play();
    console.log('I worked');
  }

  function hitRide() {
    $rideNoise.load();
    $rideNoise.play();
    console.log('I worked');
  }
})
