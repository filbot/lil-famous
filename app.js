var xhr = new XMLHttpRequest(),
  response,
  wordArray = [],
  btn = document.querySelector('.button'),
  luxWordEl = document.querySelector('.luxury-word'),
  url = 'https://api.datamuse.com/words?rel_trg=luxury',
  response = [{"word":"suites","score":1543},{"word":"lexus","score":1527},{"word":"suv","score":1525},{"word":"condominium","score":1518},{"word":"sedan","score":1473},{"word":"hotels","score":1466},{"word":"cadillac","score":1447},{"word":"boutique","score":1443},{"word":"resorts","score":1415},{"word":"hotel","score":1408},{"word":"yacht","score":1405},{"word":"brands","score":1402},{"word":"goods","score":1384},{"word":"coupe","score":1381},{"word":"liner","score":1377},{"word":"watches","score":1371},{"word":"boxes","score":1362},{"word":"trim","score":1360},{"word":"bmw","score":1357},{"word":"amenities","score":1355},{"word":"jewellery","score":1353},{"word":"accessories","score":1350},{"word":"spa","score":1348},{"word":"resort","score":1339},{"word":"flats","score":1332},{"word":"apartment","score":1324},{"word":"leather","score":1323},{"word":"saloon","score":1321},{"word":"nissan","score":1318},{"word":"jewelry","score":1313},{"word":"brand","score":1310},{"word":"seating","score":1308},{"word":"cruise","score":1307},{"word":"lifestyle","score":1298},{"word":"cars","score":1296},{"word":"premium","score":1291},{"word":"item","score":1290},{"word":"toyota","score":1277},{"word":"items","score":1271},{"word":"fashion","score":1266},{"word":"afford","score":1259},{"word":"comfort","score":1246},{"word":"car","score":1244},{"word":"retail","score":1241},{"word":"automobile","score":1239},{"word":"suite","score":1237},{"word":"residential","score":1231},{"word":"accommodation","score":1221},{"word":"shopping","score":1219},{"word":"expensive","score":1207},{"word":"rooms","score":1206},{"word":"casino","score":1204},{"word":"manufacturer","score":1203},{"word":"auto","score":1194},{"word":"wealthy","score":1193},{"word":"flagship","score":1191},{"word":"furniture","score":1185},{"word":"vehicles","score":1184},{"word":"homes","score":1181},{"word":"clothing","score":1179},{"word":"designer","score":1174},{"word":"restaurant","score":1172},{"word":"manufactured","score":1171},{"word":"vehicle","score":1166},{"word":"stores","score":1161},{"word":"mall","score":1156},{"word":"motor","score":1154},{"word":"segment","score":1152},{"word":"villa","score":1150},{"word":"models","score":1148},{"word":"tourist","score":1147},{"word":"seats","score":1144},{"word":"tax","score":1142},{"word":"market","score":1140},{"word":"exclusive","score":1139},{"word":"travel","score":1137},{"word":"buses","score":1129},{"word":"interior","score":1125},{"word":"guests","score":1124},{"word":"watch","score":1122},{"word":"options","score":1121}];

// xhr.open('GET', url);
// xhr.send(null);

// xhr.onreadystatechange = function () {
//   var DONE = 4; // readyState 4 means the request is done.
//   var OK = 200; // status 200 is a successful return.
//   if (xhr.readyState === DONE) {
//     if (xhr.status === OK) {
//       response = JSON.parse(xhr.responseText);
//       wordArray = generateWordArray(response);
//       getRandomWord();
//     } else {
//       console.log('Error: ' + xhr.status); // An error occurred during the request.
//     }
//   }
// };

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
  wordArray = generateWordArray(response);
  fancyWord = getRandomWord();
  luxWordEl.textContent = fancyWord;
}




