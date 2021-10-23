// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  //Set variables
  let hornImg = document.querySelector('img');
  let hornAudio = document.querySelector('audio');
  let audioImg = document.getElementById('volume-controls').querySelector('img');
  const jsConfetti = new JSConfetti();

  //check to see if horn is changed
  let selInput = document.querySelector('select');
  selInput.addEventListener('change', updateHorn);

  //check to see if slider is changed
  let slideInput = document.getElementById('volume');
  slideInput.addEventListener('input', updateSlider);

  //play sound if button is pressed
  let playSoundButton = document.querySelector('button');
  playSoundButton.addEventListener('click', event => {
    hornAudio.play();
    if(selInput.selectedIndex == 3) {
      jsConfetti.addConfetti();
    }
  });

  function updateSlider() {
    hornAudio.volume = (slideInput.value / 100);
    if(slideInput.value < 1) {
      audioImg.src = 'assets/icons/volume-level-0.svg'
    }
    else if(slideInput.value < 33) {
      audioImg.src = 'assets/icons/volume-level-1.svg'
    }
    else if(slideInput.value < 67) {
      audioImg.src = 'assets/icons/volume-level-2.svg'
    }
    else {
      audioImg.src = 'assets/icons/volume-level-3.svg'
    }
  }

  function updateHorn() {
    if(selInput.selectedIndex == 1) {
      hornImg.src = 'assets/images/air-horn.svg';
      hornAudio.src = 'assets/audio/air-horn.mp3';

    }
    else if(selInput.selectedIndex == 2) {
      hornImg.src = 'assets/images/car-horn.svg';
      hornAudio.src = 'assets/audio/car-horn.mp3';
    }
    else if(selInput.selectedIndex == 3) {
      hornImg.src = 'assets/images/party-horn.svg';
      hornAudio.src = 'assets/audio/party-horn.mp3';
    }
  }

}