var letters = ["A", "B", "C", "D", "E", "F", "G", "H",
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var guessesRemain = 15;

var turnsUsed  // number of turns used
var lettersUsed // letters already used
var wordsUsed // words to be guessed in game
var currentWordindex // index of the current word in the array
var guessedLetters = [];
var guessingWord = [];
var gameStart = false;


var islanderWords = [
    "BOSSY",
    "NYSTROM",
    "TAVARES",
    "TROTTIER",
    "SMITH",
    "HOCKEY",
    "STANLEYCUP",
    "DEFENSEMAN",
    "FORWARD",
    "GOALIE",
    "COLISEUM"
];

var word = islanderWords[Math.floor(Math.random() * islanderWords.length)];

currentWordIndex = Math.floor(Math.random() * (islanderWords.length));

var guessArray = [];
for (var i = 0; i < word.length; i++) {
    guessArray.push("_ ");
}

var answerArray = [];
for (var j = 0; j < word.length; j++) {
    answerArray.push(word[j]);
}

var remainingLetters = word.length;

function replaceWords(userGuess){
    var str = guessArray[i];
    var ans = str.replace(answerArray[currentWordindex]);
}

function makeGuess(letter) {
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        evaluateGuess(letter);
    }

}


window.onload = function gameStart(){
    document.getElementById("guessedWords").textContent = guessArray.join("");
    document.getElementById("wins").textContent = wins;
    document.getElementById("guessesRemain").textContent = guessesRemain;
}

document.onkeyup = function(event){
    
    var userGuess = event.keyCode;

    if (userGuess >= 65 && userGuess <= 90){
        console.log("I'm having trouble");
            }
    }

