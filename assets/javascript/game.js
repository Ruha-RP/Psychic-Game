

//Created an array, that list out all the options for the computer to choose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]; 

//Defined the variables, that will hold the number of wins, losses and guesses left 
//Track the wins
var  wins = 0;
//Track the losses
var losses = 0;
//Track the overall guesses
var guesses = 10;
		
//Making an empty array
var guessesSoFar = document.getElementById("soFar");
var soFar = [];

//Randomly chooses a letter from the computerChoices array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	
console.log("This is the computerGuess " + computerGuess);


//Add the function that will be triggered after the user presses the key
document.onkeyup = function(event) {
	
//Captures the key press, converts it to lower case and saves it to a variable
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log("this is userGuess " + userGuess);

	//push the userGuess into soFar array
	soFar.push(userGuess);
	//Assign the new value to the HTML
	guessesSoFar.innerHTML = soFar;
		
	console.log("this is soFar " + soFar);
	
	//Update the HTML
	//The HTML for Users Guesses & userWins here
	var userGuesses = document.getElementById("guesses");
	var userWins = document.getElementById("wins");
	var userLosses = document.getElementById("losses");
		
	
	//Adding the If..Else statement in order to make the comparisons
		if (userGuess !== computerGuess) {
			
			guesses--; //number of guess will reduce  by 1
			userGuesses.innerHTML = guesses;

				if (guesses === 0) {
					reset();
					losses++; //number of losses will increase by 1
					userLosses.innerHTML = losses;
				}
		}
		else {

			wins++;  //wins go up by 1, if there's match
			userWins.innerHTML = wins;
			reset();
		};

	function reset() {
		guesses = 10;
		soFar = [];
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log("Resetting the game and new computerGuess is " + computerGuess);
	};

};

