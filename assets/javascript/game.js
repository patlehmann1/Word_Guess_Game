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


var guessArray = [];
for (var i = 0; i < word.length; i++) {
guessArray.push("_ ");
}

function getAllIndexes(array, letter) {
    var indexes = [];
    var i = -1;
    while ((i = array.indexOf(letter, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}

currentWordIndex = Math.floor(Math.random() * (islanderWords.length));

var remainingLetters = word.length;

window.onload = function gameStart(){

    document.getElementById("guessedWords").textContent = guessArray.join("");
    document.getElementById("wins").textContent = wins;
    document.getElementById("guessesRemain").textContent = guessesRemain;
    
}

document.onkeyup = function gamePlay(event){

var userGuess = event.keyCode;

    if (userGuess >= 45 && userGuess <= 90){
        guessedLetters.push(event.key);
        document.getElementById("guessed-letters").textContent = guessedLetters;
    }
}
