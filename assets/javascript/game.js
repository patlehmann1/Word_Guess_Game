var letters = ["A", "B", "C", "D", "E", "F", "G", "H",
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var guessesRemain = 15;
var currentWordindex // index of the current word in the array
var guessArray = [];
var guessedLetters = [];
var guessingWord = [];
var resetButton= document.getElementById("reset-button");
var userGuess;


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

function gameStart(){

    for (var i = 0; i < word.length; i++) {
        guessArray[i] = "_";
    }
    document.getElementById("guessedWords").textContent = guessArray.join("");
}

var blankSpaces = guessArray.length;

var remainingLetters = word.length;


function removeDuplicates(arr){
    guessedLetters = []
    for(let i = 0;i < arr.length; i++){
        if(guessedLetters.indexOf(arr[i]) == -1){
            guessedLetters.push(arr[i]);
        }
    }
    return guessedLetters;
}

function replaceBlanks(){

    for (var i = 0; i < word.length; i++){
        if (word[i] === userGuess){
            guessArray[i] = userGuess;
        }
        blankSpaces--;
    }
}

gameStart(guessArray);

document.getElementById("guessesleft").textContent = guessesRemain;
document.getElementById("wins").innerHTML = wins;
document.getElementById("guessed-letters").textContent = guessedLetters;


    document.onkeyup = function whenKeyIsPressed(event){

        var userGuessNum = event.keyCode;
        userGuess = String.fromCharCode(userGuessNum);


        if (userGuessNum >= 65 && userGuessNum <= 90){

            userGuess = userGuess.toUpperCase();

            guessedLetters.push(userGuess);

            removeDuplicates(guessedLetters);

            replaceBlanks();

            if (guessesRemain > 0){
                guessesRemain--;
            }
            else {
            alert("YOU LOSE!!!");
        
    
        }  
    }

if (blankSpaces == 0){
    wins++;
    document.getElementById("youWin").innerHTML = "YOU WIN!!! LETS GO ISLANDERS!!!!";
    
}

}