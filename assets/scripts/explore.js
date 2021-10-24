// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
 
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let synth = window.speechSynthesis;
  let selInput = document.querySelector('select');
  let utter =new SpeechSynthesisUtterance('');
  let face = document.querySelector('img');

  // utter.addEventListener('start', event => {
  //   face.src = 'assets/images/smiling-open.png';
  // } );


  let playButton = document.querySelector('button');
  playButton.addEventListener('click', updateButton);
  
  

  function updateButton() {
    utter = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);

    let selVoice = selInput.selectedOptions[0].getAttribute('data-name');
    let voices = synth.getVoices();
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selVoice) {
        utter.voice = voices[i];
      }
    }
    utter.addEventListener('start', event => {
      face.src = 'assets/images/smiling-open.png';
    } );

    synth.speak(utter);
    
    utter.addEventListener('end', event => {
      face.src = 'assets/images/smiling.png';
    } );
  }
  

}


function populateVoiceList() {
  if(typeof speechSynthesis === 'undefined') {
    return;
  }

  let voices = speechSynthesis.getVoices();

  for(let i = 0; i < voices.length; i++) {
    let option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}