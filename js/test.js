// testing some js changes so using this file to keep other clean.

//this file works

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var word,
space,
guess,
guesses = [],
lives,
counter; 

var buttons = function(element) {

	myButtons = document.getElementById('buttons');
	letters = document.createElement('ul');

	for (var i = 0; i < alphabet.length; i++) {
		letters.id = 'alphabet';
		list = document.createElement('li');
		list.id = 'letter';
		list.innerHTML = alphabet[i];
		check();
		myButtons.appendChild(letters);
		letters.appendChild(list);
	}
}

// populate area for guess with - for amount of letters
function generateGuessArea() {
	wordHolder = document.getElementById('guessArea');
	correct = document.createElement('ul');


	for (var i = 0; i < word.length; i++) {
		correct.setAttribute('id', 'myWord');
		guess = document.createElement('li');
		guess.setAttribute('class', 'guess');
		if (word[i] === "-") {
			guess.innerHTML = "-";
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
  	var drawMe = lives ;
  	drawArray[drawMe]();
  }

   // Hangman
   canvas =  function(){

   	myStickman = document.getElementById("stickman");
   	context = myStickman.getContext('2d');
   	context.beginPath();
   	context.strokeStyle = "red"; //was #fff
   	context.lineWidth = 2;
   };

   head = function(){
   	myStickman = document.getElementById("stickman");
   	context = myStickman.getContext('2d');
   	context.beginPath();
   	context.arc(60, 25, 10, 0, Math.PI*2, true);
   	context.stroke();
   }

   draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

   	context.moveTo($pathFromx, $pathFromy);
   	context.lineTo($pathTox, $pathToy);
   	context.stroke(); 
   }

   frame1 = function() {
   	draw (0, 140, 140, 140); //draw (0, 150, 150, 150)
   };
   
   frame2 = function() {
   	draw (10, 0, 10, 600);
   };

   frame3 = function() {
   	draw (0, 5, 70, 5);
   };

   frame4 = function() {
   	draw (60, 5, 60, 15);
   };

   torso = function() {
   	draw (60, 36, 60, 70);
   };

   rightArm = function() {
   	draw (60, 46, 100, 50);
   };

   leftArm = function() {
   	draw (60, 46, 20, 50);
   };

   rightLeg = function() {
   	draw (60, 70, 100, 100);
   };

   leftLeg = function() {
   	draw (60, 70, 20, 100);
   };

   drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


   check = function () {
   	list.onclick = function () {
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

   function bindEvents() {
   	$('input[type=button]').on("click", playGame);

   }

   function playGame() {
   	event.preventDefault() 

   	word = $('#pass').val();
      word =word.toLowerCase();
   	console.log(word);
   	guesses = [];
   	lives = 10;
   	counter = 0;
   	space = 0;
   	generateGuessArea();
   	comments();
   	buttons();
   	canvas();


}

// $('reset').onclick = function() {
//     correct.parentNode.removeChild(correct);
//     letters.parentNode.removeChild(letters);
//     context.clearRect(0, 0, 400, 400);
//     play();
//   }

   //    // Reset

   //      document.getElementById('reset').onclick = function() {
   //        correct.parentNode.removeChild(correct);
   //        letters.parentNode.removeChild(letters);
   //        showClue.innerHTML = "";
   //        context.clearRect(0, 0, 400, 400);
   //        play();
   //      }
   //    }
   // }



   $(bindEvents);



