var wins=0;
var losses=0;
var guesses =[];
var numGuesses = 9;

var winsText= document.getElementById("wins-text");
var lossesText= document.getElementById("losses-text");
var guessText= document.getElementById("guess-text");
var numberOfGuesses= document.getElementById("guessesleft-text")

var computerChoices = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.onkeyup = function(event) {
  var userGuess = event.key;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  

  if(userGuess === computerGuess){
    wins++
    numGuesses= 9;
    guesses = []
    
  }else if(userGuess !== computerChoices){
      numGuesses --;
      guesses.push(userGuess);
  }

  if (numGuesses === 0){
      numGuesses= 9;
      losses ++;
      guesses = []
  }


  numberOfGuesses.textContent=('Number of guesses: ' + numGuesses);
  winsText.textContent=("Wins: " + wins);
  lossesText.textContent=("Losses: " + losses);
  guessText.textContent=("You guessed: " + guesses.join([","]));


};