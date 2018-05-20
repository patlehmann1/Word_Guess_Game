var letters = ["A", "B", "C", "D", "E", "F", "G", "H",
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var guessesLeft = 15;
var currentWordindex // index of the current word in the array
var guessedLetters = [];
var guessingWord = [];
var guessArray = [];
var gameStart = false;
var word;
var blankSpaces;
var blankWordGuess = document.getElementById("blankWordGuess")
var alreadyGuessedLetters = document.getElementById("guessed-letters");
var youWin = document.getElementById("YouWin");
var wins = document.getElementById("wins");
var resetButton = document.getElementById("reset-button");
var guessesRemain = document.getElementById("guessesleft");

//dom manipulation

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
    "COLISEUM",
    "POTVIN",
    "PUCK",
    "UNIONDALE"
];

function startNewGame() {
    //Resets variables
    guessArray = [];
    previousGuesses = [];
    guessesLeft = 10;
    //Chooses a random word 
    word = islanderWords[Math.floor(Math.random() * islanderWords.length)]
    // Sets up Number of Blanks Needed
    for (var i = 0; i < word.length; i++) {
        guessArray.push("_");
    }
    //Rewrites variables
    
}

    
    
    //Rewrites variables
    





function getAllIndexes(array, letter) {
    var indexes = [];
    var i = -1;
    while ((i = array.indexOf(letter, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}

function updateWords(arr){
    guessedLetters = []
    blankSpaces = guessArray.length;
    for(let i = 0;i < arr.length; i++){
        if(guessedLetters.indexOf(arr[i]) == -1){
            guessedLetters.push(arr[i]);
        }
    }
    var allIndexes = getAllIndexes(word, userGuess);

    for (var i = 0; i < allIndexes.length; i++){
        guessArray[allIndexes[i]] = userGuess;
        blankSpaces--;
    }
    
    return blankSpaces;
}

document.onkeyup = function (event) {
    var humanInput = event.key;
    updateWords(humanInput);
    didYouWin();
}


window.onload = function(){

    startNewGame();

    guessArray = [];

    blankWordGuess.innerHTML = guessArray.join(" ");
    alreadyGuessedLetters.innerHTML = "Previous Guesses: " + previousGuesses;
    guessesRemain.innerHTML = "Number of Guesses: " + guessesLeft;




}