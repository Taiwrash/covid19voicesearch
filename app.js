window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;
// const a = document.createElement('a');
let parag = document.createElement('p');
const container = document.querySelector('.container');

// a.setAttribute('href', `https://taiwrash.github.io/worldcovid19cases`);

    
// a.appendChild(parag);
parag.setAttribute('onload', 'replaceFunction()');

container.appendChild(parag);





recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
   
         parag.textContent = transcript;

         if(e.results[0].isFinal) {
             parag = document.createElement('p');
             
             container.appendChild(parag);
         }
         if (transcript.includes('Corona virus cases')){
             return replaceFunction();
         }

         function replaceFunction(){
             window.open("https://taiwrash.github.io/worldcovid19cases", "_blank");
         }
})
recognition.addEventListener('end',recognition.start);
recognition.start();

on