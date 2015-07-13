// $(document).ready(function(){

// });


var myGame = myGame || {};


myGame.setup = function(){

	this.word = prompt("Please enter a word to use in the game.");
	
	this.alphaB = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	this.score = 0;
	this.gamesPlayed = 0;
	this.guessedLetter = ""; // placeholder for letter guess
	this.match = true; 
	this.usedLetters = []; 
	this. wordGuessed = []; 
	var hangman = [];
}

myGame.validateWord = function(word) {

    var regTest = /^[a-zA-Z]+$/.test(word);
    var nonValidMsg = ("That is not a valid word or word length, please re-enter, minimum 3 letters.");
    
    if (regTest === true && word.length > 4) {
        console.log("lets play " + word);
    }else{
      validateWord(prompt(nonValidMsg));
    }
    
}

myGame.reset = function() {


}// placeholder to reset/clear score and gamesPlayed back to 0.

myGame.playGame = function(word) {

	validateWord(word);
}

playGame(word);



