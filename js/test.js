// window.onload = function () {
	
// 	$(bindEvents);
// }

// var hangman = [],
// usedLetters = [],
var word,
space,
guess,
guesses = [],
lives, //guesses left
counter; // count correct guesses
	//guessedLetter,
	//guessSearch,
	// var score = 0,
	// var gamesPlayed = 0;

	//var showLives = document.getElementById("guess_left");

	function validateWord() {
		var regTest = /^[a-zA-Z]+$/.test(word);
		var nonValidMsg = ("That is not a valid word or word length, please re-enter, minimum 3 letters.");

		if (regTest === true && word.length > 4) {
			return true;
		} else {
		// validateWord(prompt(nonValidMsg));
		return false;
	}
}
var activaeBtns = function() {

	var $button = $("button").click(function(){
	    $(this).attr("id");
	});

	//var $button = $('button').event.target.id;

	//var button = document.getElementsByTagName('button').target.id;

	check();
}

check = function () {
	$('button').onclick = function () {
		var guess = (this.innerHTML);
		this.setAttribute("class", "active");
		this.onclick = null;
		for (var i = 0; i < word.length; i++) {
			if (word[i] === guess) {
				guesses[i].innerHTML = guess;
				counter += 1;
			}
		};
		var j = (word.indexOf(guess));
		if (j === -1) {
			lives -= 1;
			comments();
			animate();
		} else {
			comments();
		}
	}
};

// populate area for guess with - for amount of letters
function generateGuessArea() {
	wordHolder = document.getElementById('guessArea');
	correct = document.createElement('ul');


	for (var i = 0; i < word.length; i++) {
		correct.setAttribute('id', 'myWord');
		guess = document.createElement('li');
		guess.setAttribute('class', 'guess');
		if (word[i] === "*") {
			guess.innerHTML = "*";
			space = 1;
		} else {
			guess.innerHTML = "_";
		}

		guesses.push(guess);
		wordHolder.appendChild(correct);
		correct.appendChild(guess);

	}

}

// Show lives/guesses left
comments = function () {
	var showLives = document.getElementById("guess_left");

	showLives.innerHTML = "You have " + lives + " guesses left"; 
	if (lives < 1) {
		showLives.innerHTML = "Game Over";
	}
	for (var i = 0; i < guesses.length; i++) {
		if (counter + space === guesses.length) {
			showLives.innerHTML = "You Win!";
		}
	}
};

// beginning of drawing section to draw parts of hangman depending on lives	 
// Animate man
var animate = function () {
	var drawMe = lives;
	drawArray[drawMe]();
}


// Hangman
canvas = function () {

	myStickman = document.getElementById("stickman");
	context = myStickman.getContext('2d');
	context.beginPath();
	context.strokeStyle = "#fff";
	context.lineWidth = 2;
};

head = function () {
	myStickman = document.getElementById("stickman");
	context = myStickman.getContext('2d');
	context.beginPath();
	context.arc(60, 25, 10, 0, Math.PI * 2, true);
	context.stroke();
};

draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

	context.moveTo($pathFromx, $pathFromy);
	context.lineTo($pathTox, $pathToy);
	context.stroke();
};

frame1 = function () {
	draw(0, 150, 150, 150);
};

frame2 = function () {
	draw(10, 0, 10, 600);
};

frame3 = function () {
	draw(0, 5, 70, 5);
};

frame4 = function () {
	draw(60, 5, 60, 15);
};

torso = function () {
	draw(60, 36, 60, 70);
};

rightArm = function () {
	draw(60, 46, 100, 50);
};

leftArm = function () {
	draw(60, 46, 20, 50);
};

rightLeg = function () {
	draw(60, 70, 100, 100);
};

leftLeg = function () {
	draw(60, 70, 20, 100);
};

drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

// end of drawing section

// OnClick Function


function bindEvents() {
	$('input[type=button]').on("click", playGame);
}

function playGame() {
	event.preventDefault() 

	word = $('#pass').val();
	//word = word.replace(/\s/g, "-");
	console.log(word);
	guesses = [];
	lives = 10;
	counter = 0;
	space = 0;
	generateGuessArea();
	comments();
	canvas();

	activaeBtns();
	generateGuessArea();

	if (!validateWord()) {
		//alert("not valid");
		return false;
	}
}

$(bindEvents);




//function indexesOf(guessedLetter) {
//	var count = 0;
//	var pos = word.indexOf(guessedLetter);
//
//	while (pos !== -1) {
//		count++;
//		pos = word.indexOf(guessedLetter, pos + 1);
//	}
//
//	return count;
//}

//function isMatch(guessedLetter) {
//	var letterPush; // to push the guessed letter into the wordMatch array
//	var letterCount = indexesOf(guessedLetter);
//	//to correct the number of guessed letters
//	var letterPosition;
//	var wordMatch = Array(word.length + 1).join('*').split('');
//	usedLetters.push(guessedLetter);
//
//	if (letterCount > 0) {
//		for (var i = 0; i < letterCount; i++) {
//			letterPosition = word.indexOf(guessedLetter, letterPosition + 1);
//			wordMatch.splice(letterPosition, 1, guessedLetter);
//		}
//	}
//
//	console.log(wordMatch);
//	return wordMatch, usedLetters;
//}


