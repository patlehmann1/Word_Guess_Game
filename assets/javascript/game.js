var letters = ["A", "B", "C", "D", "E", "F", "G", "H",
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var guessesRemain = 20;
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
guessArray.push("_");
}

var blankSpaces = guessArray.length;

var remainingLetters = word.length;

function getAllIndexes(array, letter) {
    var indexes = [];
    var i = -1;
    while ((i = array.indexOf(letter, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}

function removeDuplicates(arr){
    guessedLetters = []
    for(let i = 0;i < arr.length; i++){
        if(guessedLetters.indexOf(arr[i]) == -1){
            guessedLetters.push(arr[i]);
        }
    }
    return guessedLetters;
}

window.onload = function(){
    document.getElementById("wins").textContent = wins;
}

currentWordIndex = Math.floor(Math.random() * (islanderWords.length));

document.onkeyup = function gameStart(){

    document.onkeyup = function whenKeyIsPressed(event){

        var userGuessNum = event.keyCode;
        var userGuess = event.key;


        if (userGuessNum >= 65 && userGuessNum <= 90){

        userGuess = userGuess.toUpperCase();

        console.log(word);

        var allIndexes = getAllIndexes(word, userGuess);

        for (var i = 0; i < allIndexes.length; i++){
            guessArray[allIndexes[i]] = userGuess;
            blankSpaces--;
        }

        document.getElementById("guessedWords").textContent = guessArray.join("");
        document.getElementById("guessesRemain").textContent = guessesRemain;    

        console.log(remainingLetters);

        guessedLetters.push(userGuess);

        removeDuplicates(guessedLetters);

        document.getElementById("guessed-letters").textContent = guessedLetters;
    
        if (guessesRemain > 0){
            guessesRemain--;
        }
        else {
            alert("YOU LOSE!!!");
            gameStart();
        
    
        }  
    }


    if (blankSpaces == 0){
        gameStart();
        wins++;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("guessedWords").innerHTML = "YOU WIN!!"
    }
    

}
}
