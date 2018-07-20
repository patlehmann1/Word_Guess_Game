
//global variables
var actualWord = "";
var letters = [];
var guessArray = [];
var wrongLetters = [];
var num = 0;
var guessesRemain = 20;
var losses = 0;
var wins = 0;

var islanderWords = [
    "BOSSY",
    "NYSTROM",
    "BARZAL",
    "TROTTIER",
    "SMITH",
    "HOCKEY",
    "STANLEYCUP",
    "DEFENSEMAN",
    "FORWARD",
    "GOALIE",
    "COLISEUM",
    "NHL",
    "ISLANDERS",
    "NEWYORK",
    "BLUELINE",
    "FACEOFF",
    "FIGHTING"
];

function gameStart() {
    var word = islanderWords[Math.floor(Math.random() * islanderWords.length)];
    letters = actualWord.split("");
    num = letters.length;
    for (var i = 0; i < word.length; i++) {
        guessArray.push("_");
    }

    document.getElementById("guessedWords").innerHTML = guessArray.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesleft").innerHTML = guessesRemain;
}

function checkAnswer (letter) {

    var letterInWord = false;
  
    for(var j = 0; j < num; j++) {
      if (letter == actualWord[j]) {
        letterInWord = true;
      }
    }
   
    if (letterInWord) {
      for(var j = 0; j < num; j++) {
        if (actualWord[j] == letter) {
          guessArray[j] = letter;
          console.log(guessArray);
        }         
      }
    } else {
        wrongLetters.push(letter);
        guessesRemain--;
    }
    
  };

  function rounds() {
    document.getElementById("guessesleft").innerHTML = guessesRemain;
    document.getElementById("guessed-letters").innerHTML = wrongLetters;
    document.getElementById("guessedWords").innerHTML = guessArray.join(" ");
     
    if(letters.toString() == guessArray.toString()) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      gameStart();
    } else if (guessesRemain === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        gameStart();
    }
  };

  document.addEventListener("onkeyup", function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    checkAnswer(userGuess);
    rounds();
  });

  gameStart();