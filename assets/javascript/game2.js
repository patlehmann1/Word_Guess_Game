var words = [
    "accio",
    "aguamenti",
    "alohomora",
    "crucio",
    "episkey",
    "lumos",
    "diffindo",
    "evanesco",
    "expelliarmus",
    "imperio",
    "nox",
    "incendio",
    "levicorpus",
    "mosmordre",
    "obliviate",
    "portus",
    "reducto",
    "reparo",
    "riddikulus",
    "rictusempra",
    "scourgify",
    "stupefy",
]
// Sets Game Variables
var guessesLeft = 10; //Number of tries a player has to guess the word 
var previousGuesses = []; //Letters already guessed
var answerArray = []; //The dashes and letters guessed
var winNumber = 0; //Number of Wins 
var chosenWord; //The word that is chosen
var wordSpace = document.getElementById("guessedwords"); //Grabbing the span for answers
var letterGuesses = document.getElementById("guessed-letters"); //Grabbing the previous guesses 
var guessesRemaining = document.getElementById("guessesRemain"); //Grabbing guesses paragraph
var winCount = document.getElementById("wins"); //Grabbing number of wins paragraph
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //Setting up variable so only alphabet letters can be used 


// When a new game starts, sets variables 
function startNewGame() {
    //Resets variables
    answerArray = [];
    previousGuesses = [];
    guessesLeft = 10;
    //Chooses a random word 
    chosenWord = words[Math.floor(Math.random() * words.length)]
    // Sets up Number of Blanks Needed
    for (var i = 0; i < chosenWord.length; i++) {
        answerArray.push("_");
        wordSpace.innerHTML = answerArray.join("");
    }
    //Rewrites variables
    letterGuesses.innerHTML = "Previous Guesses: " + previousGuesses;
    guessesRemaining.innerHTML = "Number of Guesses: " + guessesLeft;
}

function updateWords(letter) {
    //If the letter does not match, then letter is added to previous guesses and a turn is lost.
    if (chosenWord.indexOf(letter) === -1 && alphabet.indexOf(letter) >= 0) {
        if (previousGuesses.indexOf(letter) >= 0){
        }
        else{
        previousGuesses.push(letter);
        letterGuesses.innerHTML = "Previous Guesses: " + previousGuesses.join(", ");
        guessesLeft--;
        guessesRemaining.innerHTML = "Number of Guesses: " + guessesLeft;}
    //If the letter matches, then letter is added to answerArray
    } else if (chosenWord.indexOf(letter) >= 0 && alphabet.indexOf(letter) >= 0) {
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                answerArray[i] = letter;
            }
            wordSpace.innerHTML = answerArray.join(" ")
        }
    }

}

//Adds to the number of wins 
function youWon() {
    winNumber++;
    winCount.innerHTML = "Number of Wins: " + winNumber;

}

//Creates a function for the alert in order to use setTimeout
function alertWin(){
    alert("You're a word wizard!");
}

//Alerts user if they won or lost
function didYouWin() {
    if (answerArray.indexOf("_") === -1) {
        var slowWinAlert = setTimeout(alertWin, 500);
        youWon();
        var SlowReset = setTimeout(startNewGame, 500);
    } else if (guessesLeft === 0) {
        alert("You've lost, old friend!");
        startNewGame();
    }

}

// Whenever a key is pressed
document.onkeyup = function (event) {
    var humanInput = event.key;
    updateWords(humanInput);
    didYouWin();
}

//What happens when the page loads 
window.onload = startNewGame();
