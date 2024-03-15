var targetNumber;  //generates a random number between 1 and 1000
var guessCounter = 0;

function incrementCounter() { //increments counter and displays updated count
    guessCounter++;
    document.getElementById("guessCountsLineDiv").innerHTML = "Guesses: " + guessCounter;
}

function rollNumber() { //logic for rolling the number to be guessed
    targetNumber = Math.random().toFixed(3) * 1000;
    console.log("Target number: " + targetNumber); //displays target number to console for debugging
}

function guessCountsResult() { //displays text about guess counts and resets counter
    if (guessCounter < 10) { document.getElementById("guessCountsLineDiv").innerHTML += " - Either you know the secret or you got lucky!"; }
    else if (guessCounter == 10) { document.getElementById("guessCountsLineDiv").innerHTML += " - Ahah! You know the secret!"; }
    else if (guessCounter > 10) { document.getElementById("guessCountsLineDiv").innerHTML += " - You should be able to do better!"; }
    guessCounter = 0;
}

function guessResult() { //compares and displays the result of a user guess
    userGuess = parseInt(document.getElementById("guessBox").value);
    incrementCounter();

    if (userGuess > targetNumber) { //guess is higher than target
        document.getElementById("resultsLineDiv").innerHTML = userGuess + " is too high. Try again.";
        userGuess = document.getElementById("guessBox").value = "";
    } else if (userGuess < targetNumber) { //guess is lower than target
        document.getElementById("resultsLineDiv").innerHTML = userGuess + " is too low. Try again.";
        userGuess = document.getElementById("guessBox").value = "";
    } else if (userGuess == targetNumber) { //guess is correct, also re-rolls a new number
        document.getElementById("resultsLineDiv").innerHTML = "Congratulations! You guessed the number!";
        guessCountsResult();
        userGuess = document.getElementById("guessBox").value = "";
        rollNumber();
    }
}

window.addEventListener("submit", guessResult, false); //listens for submit events to get both button clicks and when user presses enter in the guess field
rollNumber();