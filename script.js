var buttonElement = document.getElementById('openhat-button')
var audioElement = document.getElementById("openhat-audio");
buttonElement.addEventListener('click', function () {
  console.log('Just clicked!')
  audioElement.play();
})

buttonElement.addEventListener('mouseenter', function () {
  audioElement.play();
})

var clapButton = document.getElementById('clap-button')
var clapAudio = document.getElementById("clap-audio");
clapButton.addEventListener('click', function () {
  console.log('Just clicked!')
  clapAudio.play();
})

clapButton.addEventListener('mouseenter', function () {
  clapAudio.play();
})

var rideButton = document.getElementById('ride-button')
var rideAudio = document.getElementById("ride-audio");
rideButton.addEventListener('click', function () {
  console.log('Just clicked!')
  rideAudio.play();
})

rideButton.addEventListener('mouseenter', function () {
  rideAudio.play();
})
