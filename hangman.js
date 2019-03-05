//setting my variables up
var rand = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var numChar = 0;
//Starter phrases for puzzles
var phrases = ["That's life!", "The dawn of a new day.", "Putting your best foot forward."]
var challenges = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//Setting up the challenge function

function challenge() {
    rand = Math.floor(Math.random() * challenges.length);
    word = challenges[rand];
    numChar = 1;
    var letter = word.substring(0, 1);
//set up display for game play
//..........
//..........
}
//Getting players' guesses
function challengeGuess() {
    var target = event.target || event.sourceElement;
    target.style.visibility = "hidden";
    var lower = target.id;
    var upper = document.getElementById(lower).getAttribute("value");
    var results = document.getElementById("results");
    if (document.getElementById("letter1").innerHTML === upper) {
        document.getElementById("letter1").style.visibility = "visible";
        numRight++;
    }

    if (numRight == 0) {
        numWrong++;
        hang();
    }

    if (numRight == 1) {
        results.style.visibility = "visible";
        results.style.color = "red";
        results.innerHTML = "You Lose!";

    }


}


//setting up users' input
function hangman() {
    var x = word.length;
    if (x == 0) {
        alert("Please enter phrase.");
        return;
    }
    var y = x - 1;
    var spaces = 0;
    var validChar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "?", "!", ",", ".", "-", "'");
    for (z = 0; z < word.length; z++) {
        var letter = word.substring(y, x);
        if (validChar.indexOf(letter) > -1) {
            x--;
            y--;
        } else {
            alert("PLease remove unapproved special characters.");
            return;
        }
    }

    //Logic
    x = word.length;
    y = x - 1;


    while (x > 0) {
        numChar++;
        var letter = word.substring(y, x);
        if (letter === " ") {
            document.getElementById("letter" + x).innerHTML = "&nbsp;";
            document.getElementById("letter" + x).style.visibility = "hidden";
            document.getElementById("letter" + x).style.display = "block";
            document.getElementById("letter" + x).innerHTML = 

        }
// Code in progress