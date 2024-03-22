//generate a random number 1 to 500

// let randomNumber = parseInt(math.random())

let randomNumber = parseInt((Math.random()*500)+1);

const Submit = document.querySelector('#btn');
const userInput =document.querySelector('#in1');
const guess = document.querySelector('#guess');
const last_result = document.querySelector('#last_result');
const resultPass = document.querySelector('resultPass');
const lowOrHi = document.querySelector('lowOrHi');

const p = document.createElement("p");

let previousGuesses = [];
let numGuess = 1;
let playGame = true;


if(playGame){
    Submit.addEventListener('click',
    function (e) {
        e.preventDefault();

        //Grab guess from user
        //20
    const guess = parseInt(userInput.value);//20.5

    validateGuess(guess);


    });
}
//20
function validateGuess(guess){
if(isNaN(guess)){
    alert("please enter a valid number");
}else if(guess < 1){
    alert("please enter a number greater than 1");
}else if(guess > 100){
    alert("please enter a number less than 500!");
}else{
    //keep record of number of attempted guesses previous guesses
    previousGuesses.push(guess);
    //check to see if game is over
    if (numGuess === 11){
        displayGuess(guess);
        displayMessage(Game Over! Number was ${randomNumber} );
        endGame();
    }else{
        //display previous guessed numbers
        displayGuesses(guess);
        //check if guess is wrong and display
        checkGuess(guess);
    }
}

function checkGuess(guess){
    //display clue if guess is to high or too low
    if
}

function displayGuess(guess){

    userInput.valuue = '';
    userInput.value = guess.innerHTML += `${guess}`;
    numGuess++;
    last_result.innerHTML = `${11 - numGuess}`;
}

function checkGuess(guess){
    // display clue if its too high or low
    if(guess === randomNumber){
        displayMessage('You Guessed it correct');

    }elseif(guess < randomNumber){
        displa
    }
}

}

console.log(randomNumber);

