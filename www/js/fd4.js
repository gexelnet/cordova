// This JavaScript file has an MIT licence.
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    document.getElementById("paper").addEventListener("click", play);

    document.getElementById("rock").addEventListener("click", play);

    document.getElementById("scissors").addEventListener("click", play);


}

function play() {

    var humanChoice = this.value;

    var computerRoll = Math.floor(Math.random() * 3 + 1);//Rock, Paper, Scissors genius AI

    // Convert computer roll into words.
    if (computerRoll === 1) {
        computerRoll = "Paper";
    }

    if (computerRoll === 2) {
        computerRoll = "Rock";
    }

    if (computerRoll === 3) {
        computerRoll = "Scissors";
    }

    var result = "";

    // Player chose Paper.  
    if (humanChoice === "Paper" && computerRoll === "Paper") {
        result = "It's a draw.";
    }

    if (humanChoice === "Paper" && computerRoll === "Rock") {
        result = "You win.";
    }

    if (humanChoice === "Paper" && computerRoll === "Scissors") {
        result = "Computer wins.";
    }

    //Player chooses rock.
    if (humanChoice === "Rock" && computerRoll === "Paper") {
        result = "Computer wins.";
    }

    if (humanChoice === "Rock" && computerRoll === "Rock") {
        result = "It's a draw.";
    }

    if (humanChoice === "Rock" && computerRoll === "Scissors") {
        result = "You win.";
    }


    //Player chooses Scissors.
    if (humanChoice === "Scissors" && computerRoll === "Paper") {
        result = "You win.";
    }

    if (humanChoice === "Scissors" && computerRoll === "Rock") {
        result = "Computer wins.";
    }

    if (humanChoice === "Scissors" && computerRoll === "Scissors") {
        result = "It's a draw.";
    }

    alert("You chose: " + humanChoice + ". " + "Computer chose: " + computerRoll + ". " + result);

}