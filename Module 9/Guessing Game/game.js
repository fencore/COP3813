var targetNumber = Math.random().toFixed(3) * 1000; //generates a random number between 1 and 1000
console.log("Target number: " + targetNumber); //displays target number to console for debugging

function guessResult() { //compares and displays the result of a user guess
    userGuess = parseInt(document.getElementById("guessBox").value);

    if (userGuess > targetNumber) { //guess is higher than target
        document.getElementById("resultsLineDiv").innerHTML = userGuess + " is too high. Try again.";
        userGuess = document.getElementById("guessBox").value = "";
    } else if (userGuess < targetNumber) { //guess is lower than target
        document.getElementById("resultsLineDiv").innerHTML = userGuess + " is too low. Try again.";
        userGuess = document.getElementById("guessBox").value = "";
    } else if (userGuess == targetNumber) { //guess is correct, also re-rolls a new number
        document.getElementById("resultsLineDiv").innerHTML = "Congratulations! You guessed the number!";
        userGuess = document.getElementById("guessBox").value = "";
        targetNumber = Math.random().toFixed(3) * 1000;
        console.log("Target number: " + targetNumber);
    }
}

window.addEventListener("submit", guessResult, false); //listens for submit events to get both button clicks and when user presses enter in the guess field