$(document).ready(function() {
  // GLOBAL VARIABLES (accessible by all functions)
  // ==================================================================================================

  // Array of Word Options (all lowercase)
  var animalsList = [
    "giraffe animal",
    "badger animal",
    "rattlesnake animal",
    "horse Animal",
    "rhinocerus animal",
    "elephant animal",
    "zebra animal",
    "hawk animal",
    "anaconda animal",
    "antelope animal",
    "timberwolf animal",
    "tarantula animal"
  ];
  // Solution will be held here.
  var chosenAnimal = "";
  // This will break the solution into individual letters to be stored in array.
  var lettersInChosenWord = [];
  // This will be the number of blanks we show based on the solution
  var alreadyRight = [];
  var alreadyWrong = [];
  // Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
  var chosenLetters = [];
  // Holds all of the wrong guesses
  var wrongGuesses = [];
  var newArray = [];
  var underscoreWord = [];
  // Game counters
  var winCounter = 0;
  var lossCounter = 0;
  var numGuesses = 0;
  var letter = "";
  var matched = [];
  var position;
  var newWord;
  var numBlanks = [];
  var stringMe = "";

  // FUNCTIONS (These are bits of code that we will call upon to run when needed)
  // =========================================================================================

  // startGame()
  //var animals = ['dog', 'cat', 'bird', 'monkey', 'lion']

  // built in array methods

  // add one the end of the array
  // animals.push('bear');

  // console.log(animals);

  // remove one the end of the array
  // animals.pop();
  // console.log(animals);

  // add one to the beggining of the array
  // animals.unshift('bear');
  // console.log(animals);

  // remove one at the beggining of the array
  // animals.shift('bear');
  // console.log(animals);

  // insert one into the middle
  // (index, how many to remove, what you are putting in)
  //animals.splice(1, 0, 'bear');
  //console.log(animals);

  // remove one from the middle
  // animals.splice(1, 1);
  // console.log(animals);

  // extract a section of an array
  // var newAnimals = animals.slice(2, 4);
  // console.log(newAnimals);

  // make an array out of a string
  // var alphabet = 'abfcdefghi'.split('');

  // console.log(alphabet);

  // make an string out of an array
  // var newArray = animals.join(' ')

  // console.log(newArray);
  // Its how we we will start and restart the game.
  // (Note: It's not being run here. It's just being made for future use.)

  function startGame() {
    // Reset the guesses back to 0.
    numGuesses = 0;

    // Solution is chosen randomly from wordList.
    chosenAnimal = animalsList[Math.floor(Math.random() * animalsList.length)];
    numGuesses = 26;

    lettersInChosenWord = chosenAnimal.split("");
    console.log(lettersInChosenWord);

    // We count the number of letters in the word.
    numBlanks = lettersInChosenWord.length;

    // We print the solution in console (for testing).
    console.log(chosenAnimal);

    // CRITICAL LINE - Here we *reset* the guess and success array at each round.

    // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];

    function displayUnderscoreWord() {
      //$("#word-blanks").val().push(letter);
      for (let i = 0; i < numBlanks; i++) {
        if (lettersInChosenWord[i] === " ") {
          newArray.push("&nbsp;&nbsp;");
        } else {
          newArray.push(`_`);
        }
      }

      underscoreWord = newArray.join(" ");
      $("#word-blanks").html(underscoreWord);
      console.log("UNDERSCORE_WORD", underscoreWord);
    }
    displayUnderscoreWord();

    $("guesses-left").append(numGuesses);

    $("wrong-guesses").append(wrongGuesses.join(" "));
  }

  //console.log(numBlanks)
  function checkLetters(letter) {
    //chosenOnes();
    //console.log(chosenLetters);
    var newWord = [];
    var positionsArray = [];
    var letterInWord = false;
    //$(alreadyWrong).append(letter)
    newWord = underscoreWord.split(" ");
    position = 0;
    for (var i = 0; i < numBlanks; i++) {
      if (chosenAnimal[i] === letter) {
        newWord.splice(position, 1, letter);
        positionsArray.push(position);
        //console.log("Truthy");
        //console.log(newWord);
        letterInWord = true;
      }
      position++;
      //console.log(position);
    }
    //console.log(newWord);

    underscoreWord = newWord.join(" ");
    $("#word-blanks").html(underscoreWord);
    //console.log("UNDERSCORE_WORD", underscoreWord);

    if (letterInWord) {
      //console.log(positionsArray);
      for (var k = 0; k < positionsArray.length; k++) {
        newWord.splice(positionsArray, 1, letter);
      }
      // console.log(newWord);
    } else {
      wrongGuesses.push(letter);
      numGuesses--;
    }
  }

  function roundComplete() {
    console.log(
      "WinCount: " +
        winCounter +
        " | LossCount: " +
        lossCounter +
        " | NumGuesses: " +
        numGuesses
    );

    $("#guesses-left").html(numGuesses);
    // $("#word-blanks").push(underscoreWord.join(" "));
    $("#wrong-guesses").html(wrongGuesses.join(" "));

    for (let i = 0; i < lettersInChosenWord.length; i++) {
      if (lettersInChosenWord[i] === " ") {
        this.lettersInChosenWord[i].push("&nbsp;&nbsp;");
      }
    }

    console.log(lettersInChosenWord.join(" "));
    console.log(underscoreWord);

    if (lettersInChosenWord.toString() === underscoreWord.toString()) {
      winCounter++;
      alert("You win!");
      $("win-counter").append(winCounter);
      $("#word-blanks").clear();
      startGame();
    } else if (numGuesses === 0) {
      lossCounter++;
      alert("You lose");

      $("loss-counter").append(lossCounter);
      $("#word-blanks").clear();
      startGame();
    }
  }

  startGame();

  $(document).keyup(function(event) {
    if (
      event.keyCode >= 65 &&
      event.keyCode <= 90 &&
      event.keyCode != wrongGuesses
    ) {
      alreadyEntered = [];
      var letterGuessed = event.key.toLowerCase();
      //chosenOnes();
      checkLetters(letterGuessed);
      roundComplete();
    }
    //for (let i = 0; i < chosenLetters.length; i++) {
    //if (chosenLetters[i] !== letterGuessed) {
    //chosenLetters.push(letterGuessed);
    //console.log(chosenLetters);
    //var letterGuessed = event.key.toLowerCase();

    //checkLetters(letterGuessed);
    //roundComplete();
    //} else {
    //console.log("Shite!");
    //alert("You've already guessed that number!");
    //}
    //}
  });
});
