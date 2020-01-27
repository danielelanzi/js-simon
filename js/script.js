// <===========================INIZIO========================>
// *Simon says*
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
// Consigli del giorno:
// Partite sempre dalla logica e poi passate a scrivere in js.
// Usate le slide per vedere la sintassi delle nuove cose studiate :)
// Pushate ogni piccolo passo in avanti!
// Qualunque sperimentazione è benvenuta, ma come sempre mettetela in una cartella bonus lasciando l'esercizio base funzionante come index principale

$(document).ready(function (){
  var randomArray = [];
  for (var i = 0; i < 5; i++) {
    var randomPc = getRandomNumber(1,100);
    if (randomArray.includes(randomPc) == false) {
      randomArray.push(randomPc);
    }
  }
  console.log(randomArray);
  alert(randomArray);

  setTimeout(function (){
    var numTrue = [];
    for (var i = 0; i < 5; i++) {
      var numUser = parseInt(prompt('Inserisci un numero! ' + (i + 1)));
      if (randomArray.includes(numUser) == false) {
        numTrue.push(numUser);
      }
    }
    console.log(numTrue);
    alert(numTrue + ' hai indovinato ' + numTrue.length + ' numeri');

  }, 3000);

  var i = 10;
  var countdown = setInterval(function(){
    if (i == 0) {
      clearInterval(countdown);
    }
    i--;
  }, 1000);


  // // Funzioni

  // Numero random
  function getRandomNumber(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
  };

  // Ricarica pagina
  function ricaricaPage() {
    location.replace('file:///Users/danielelanzi/Documents/boolean-courses/consegna-esercizi/js-simon/index.html');
  };

  //Trova numero nell'array
  function checkNum(array, num){
    var i = 0;
    var result = false;
    while (i < array.length && result == false) {
      if (array[i] == num) {
        result = true;
      }
      i++;
    }
    return result;
  }
});

// <===========================FINE========================>
