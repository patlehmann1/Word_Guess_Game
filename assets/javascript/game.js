var letters = ["a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];

var turnsUsed  // number of turns used
var lettersUsed // letters already used
var wordsUsed // words to be guessed in game

var words = [
    "BOSSY",
    "NYSTROM",
    "TAVARES",
    "LONGISLAND",
    "BROOKLYN",
    "HOCKEY",
    "STANLEYCUP"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];

for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}
var remainingLetters = word.length;

while (remainingLetters > 0) {
    // Game code goes here
    // Show the player their progress
    // Take input from the player
    // Update answerArray and remainingLetters for every correct guess
   }