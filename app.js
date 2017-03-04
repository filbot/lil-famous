var xhr = new XMLHttpRequest(),
  response,
  wordArray = [],
  btn = document.querySelector('.button'),
  luxWordEl = document.querySelector('.luxury-word'),
  url = 'https://api.datamuse.com/words?rel_trg=luxury';

xhr.open('GET', url);
xhr.send(null);

xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      response = JSON.parse(xhr.responseText);
      wordArray = generateWordArray(response);
      getRandomWord();
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  }
};

function generateWordArray(data) {
  var wordArray = [];
  wordArray = data.map(grabWord);
  return wordArray;
}

function grabWord(element) {
  return element.word;
}

function getRandomWord() {
  var word = '';
  word = wordArray[Math.floor(Math.random()*wordArray.length)];
  return word;
}

btn.onclick = function() {
  var fancyWord = '';
  fancyWord = getRandomWord();
  luxWordEl.textContent = fancyWord;
}




