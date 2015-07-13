/*setting up basic structure for js, will try to get basic game working using console and prompts/alerts etc, once done then will convert to update/manipulate HTML, well that is the plan!*/

//creating variables probably far to many but hey.

var hangman = [], 
		usedLetters = [],
 		word,
		guessedLetter,
		guessSearch,
		score = 0,
		gamesPlayed = 0;

//var word = $('#pass').val(); console.log(word);
// var wordMatch = Array(word.length + 1).join('*').split('');// number of * for each letter to guess

// var guessedLetter = prompt("Please enter a letter."); // placeholder for letter guess
// var guessSearch = word.search(guessedLetter); //gives index of matched letter

function validateWord() {
	var regTest = /^[a-zA-Z]+$/.test(word);
	var nonValidMsg = ("That is not a valid word or word length, please re-enter, minimum 3 letters.");

	if (regTest === true && word.length > 4) {
		return true;
	} else{
		// validateWord(prompt(nonValidMsg));
		return false;
	}
}

// will use to generate buttons on the page, or could just add to html direclty?
function generateBtns(){

	var alphaB = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //may or may not need

	var $buttonArea = $('.letters');
}

function generateGuessArea(){
	// will populate section .guess with spaces that match length of the word
}

function indexesOf(guessedLetter) {
	var count = 0;
	var pos = word.indexOf(guessedLetter);

	while (pos !== -1) {
	  count++;
	  pos = word.indexOf(guessedLetter, pos + 1);
	}

	return count;
}

function isMatch(guessedLetter){
	var letterPush; // to push the guessed letter into the wordMatch array
	var letterCount = indexesOf(guessedLetter); 
	//to correct the number of guessed letters
	var letterPosition; //= word.indexOf(guessedLetter); 
	var wordMatch = Array(word.length + 1).join('*').split('');
 	usedLetters.push(guessedLetter);
	
	if (letterCount > 0) {
		for (var i = 0; i < letterCount; i++) {
			letterPosition = word.indexOf(guessedLetter, letterPosition + 1);
			wordMatch.splice(letterPosition, 1, guessedLetter); 
		}
	}

	console.log(wordMatch);
	return wordMatch, usedLetters;
}

function bindEvents(){
	$('input[type=button]').on("click", playGame);
}

function playGame() {
	event.preventDefault();
	word = $('#pass').val();

	if (!validateWord()) {
		// validateWord(prompt(nonValidMsg));
		alert("not valid");
	}

	generateBtns();

	var guessedLetter = prompt("Please enter a letter.");
	isMatch(guessedLetter);
	// console.log(usedLetters);
}

$(bindEvents);