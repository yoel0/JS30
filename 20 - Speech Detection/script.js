window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  console.log(e.results);
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    p.textContent = transcript;
    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
    if(transcript.includes('crypto')){
      p.innerHTML = "<img src='https://ml.globenewswire.com/Resource/Download/988a2415-2113-42f9-bc3c-2ff2c9bfd5f9?size=2' alt='bitcoin'/>"
    }
});
recognition.addEventListener('end', recognition.start);
recognition.start();