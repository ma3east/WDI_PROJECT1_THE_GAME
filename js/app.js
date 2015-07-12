/*setting up basic structure for js, will try to get basic game working using console and prompts/alerts etc, once done then will convert to update/manipulate HTML, well that is the plan!*/

//creating variables probably far to many but hey.

var hangman = []; // container for hangman parts e.g. _, |, -, though if using something line html5 canvas? (more research needed), will just build.

var word = "sunshine"; //just hard coding a word to test game, when ready will use a prompt or input from text/password field. Also want to verify is > 3 letters and only letters.

var word2 = "banana"; // second word to test includes duplicate letters.

var alphaB = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //may or may not need

var score = 0;
var gamesPlayed = 0; //total number of games played before a reset
var guessedLetter = ""; // placeholder for letter guess
var match = true; // if match = false, push letter into used, and indicate incorrect and draw a piece of the hangman
var usedLetters = []; // placeholder to display used letters on screen (after a guess)
var wordGuessed = []; //if guess/match == true, then push into here at relevant position e.g. guess = s, s, _, _, s,_, _,_, _, _


var reset = function() {


}// placeholder to reset/clear score and gamesPlayed back to 0.


