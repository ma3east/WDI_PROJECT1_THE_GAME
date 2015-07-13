/*setting up basic structure for js, will try to get basic game working using console and prompts/alerts etc, once done then will convert to update/manipulate HTML, well that is the plan!*/

//creating variables probably far to many but hey.

var hangman = []; // container for hangman parts e.g. _, |, -, though if using something line html5 canvas? (more research needed), will just build.

var word = prompt("Please enter a word to use in the game.");

//var word2 = "banana"; // second word to test includes duplicate letters.

var alphaB = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //may or may not need

var score = 0;
var gamesPlayed = 0; //total number of games played before a reset
var guessedLetter = prompt("Please enter a letter."); // placeholder for letter guess
var match = true; // if match = false, push letter into used, and indicate incorrect and draw a piece of the hangman
var usedLetters = []; // placeholder to display used letters on screen (after a guess)

var wordSizeArray = Array(word.length + 1).join('*').split(''); 

//var wordGuessed = Array(word.length + 1).join('*').split(''); //if guess/match == true, then push into here at relevant position e.g. guess = s, s, _, _, s,_, _,_, _, _



function validateWord(word) {

    var regTest = /^[a-zA-Z]+$/.test(word);
    var nonValidMsg = ("That is not a valid word or word length, please re-enter, minimum 3 letters.");
    
    if (regTest === true && word.length > 4) {
        console.log("lets play with " + word);
    }else{
      validateWord(prompt(nonValidMsg));
    }
    
}

function welcome(){
	
	var greeting = console.log("Welcome to the hangman game, you are trying to guess a word of " + word.length + " letters.");

	return (guessedLetter);
}


function isMatch (word){

	var guessSearch = word.search(guessedLetter); //gives index of matched letter
	console.log(guessSearch);

	var letterPush = wordSizeArray.splice(guessSearch, 1, guessedLetter); //(index of guess, remove 1 *, added in the guessedLetter)

	if(guessSearch > -1){
		// push into array for wordGuessed

		//wordGuessed.push(guessedLetter);

		console.log(guessedLetter + " correct guess");
		console.log(wordSizeArray);
	} else {
		console.log(guessedLetter + "was not a match");
	}

	return wordSizeArray;

}

function playGame(word) {

	validateWord(word);

	welcome();

	isMatch(word);
}

playGame(word);


var reset = function() {


}// placeholder to reset/clear score and gamesPlayed back to 0.



