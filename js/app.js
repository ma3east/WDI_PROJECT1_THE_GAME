/*setting up basic structure for js, will try to get basic game working using console and prompts/alerts etc, once done then will convert to update/manipulate HTML, well that is the plan!*/

//creating variables probably far to many but hey.

var alphaB = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //may or may not need

var hangman = []; // container for hangman parts e.g. _, |, -, though if using something line html5 canvas? (more research needed), will just build.

var word = prompt("Please enter a word to use in the game.");
var wordSizeArray = Array(word.length + 1).join('*').split('');// number of * for each letter to guess

var guessedLetter = prompt("Please enter a letter."); // placeholder for letter guess
var guessSearch = word.search(guessedLetter); //gives index of matched letter


var match = true; // if match = false, push letter into used, and indicate incorrect and draw a piece of the hangman
var usedLetters = []; // placeholder to display used letters on screen (after a guess)
var score = 0;
var gamesPlayed = 0; //total number of games played before a reset


function validateWord(word) {

	var regTest = /^[a-zA-Z]+$/.test(word);
	var nonValidMsg = ("That is not a valid word or word length, please re-enter, minimum 3 letters.");

	if (regTest === true && word.length > 4) {
		console.log("lets play with " + word);
	}else{
		validateWord(prompt(nonValidMsg));
	}

}

// function welcome(){
	
// 	var greeting = console.log("Welcome to the hangman game, you are trying to guess a word of " + word.length + " letters.");

// 	//return (guessedLetter);
// }

function isMatch (guessedLetter){
	var letterPush; 

	//console.log(guessSearch);

	if(guessSearch > -1){

		letterPush = wordSizeArray.splice(guessSearch, 1, guessedLetter); //(index of guess, remove 1 *, added in the guessedLetter)

		usedLetters.push(guessedLetter);

		console.log(guessedLetter + " correct guess");
		console.log(wordSizeArray);
		
	}else {
		console.log(guessedLetter + " was not a match");

		usedLetters.push(guessedLetter);

		return usedLetters;
	}

	return wordSizeArray, usedLetters;

}

function playGame(word) {

	validateWord(word);

	// welcome();

	isMatch(guessedLetter);

	console.log(usedLetters);
}

playGame(word);


var reset = function() {


}// placeholder to reset/clear score and gamesPlayed back to 0.



