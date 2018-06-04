// ------------------------------------------------------- VARIABLES USED -------------------------------------------------

var possible = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessCount=9;
var guessedLetters=[];
var wins=0;
var losses=0;  
var computerGuess;

// ------------------------------------------------------- FUNCTIONS USED -------------------------------------------------

// to reset game stats, choose a new letter [NOTE: toggle commented line 18 to check functionality]
function newGame() {
    guessCount=9;
    guessedLetters=[];
    var n = Math.floor(Math.random()*possible.length);
    computerGuess=possible[n];
    console.log("The computer selected "+computerGuess); computerGuess;
    document.querySelector("#current-keystroke").innerHTML=("Press any key to get started.");
}

// function to update display of game stats
function updateDisplay() {
    document.querySelector("#wins").innerHTML=wins;
    document.querySelector("#guess-arr").innerHTML=guessedLetters;
    document.querySelector("#guess-count").innerHTML=(guessCount+1);
    document.querySelector("#losses").innerHTML=losses;
} 
    
// ------------------------------------------------------- GAME BEGINS -------------------------------------------------
newGame();

// to limit # of guesses
for (i=0; i<9; i++) {
    // adding keyboard event
    document.onkeyup = function (event) {
    // to record user input
    var userGuess = event.key;
    
    if (possible.includes(userGuess)) {
        
        document.querySelector("#current-keystroke").innerHTML=("You guessed "+userGuess);
        
            if (guessedLetters.includes(userGuess)) {
                alert("You already guessed "+userGuess+". Try again.")
            } else {
                // runs game functionality
                if (userGuess==computerGuess) {
                    wins++;            
                    alert("You win! The computer has chosen a new letter.");
                    newGame();
                    updateDisplay();
                } else if (guessCount>=1) {
                    guessCount--;
                    // to include the key pressed in the list of "letters already guessed"
                    guessedLetters.push(userGuess);
                    updateDisplay();
                } else {
                    losses++;
                    alert("You lose! Try again.");
                    newGame();
                    updateDisplay();
                }
            }
        } else {
            document.querySelector("#current-keystroke").innerHTML=("Please guess a letter from a-z.");
        }
    }
}

