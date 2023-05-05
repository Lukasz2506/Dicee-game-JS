

//Create left dice:

var randomValue1 = Math.random();
var randomNumber1 = Math.floor(randomValue1 * 6 + 1);

//checking the random values from 1 to 6
//console.log(randomValue)
console.log(randomNumber1)

//convert number into string
console.log(typeof(randomNumber1));
//randomNumber1 = randomNumber1.toString();
console.log(typeof(randomNumber1));


var imageLeft = "./images/dice" + randomNumber1 + ".png";
var imgLeftObject = document.getElementsByClassName("img1")[0];
imgLeftObject.setAttribute("src",imageLeft);

//console.log("imageLocation: " + imageLocation);
//console.log("imgValue: " + imgValue);


// Create right dice:

var randomValue2 = Math.random();
var randomNumber2 = Math.floor(randomValue2 * 6 + 1);
//var randomNumber2 = randomNumber2.toString();
console.log(randomNumber2)
var imageRight = "./images/dice" + randomNumber2 + ".png";
var imageRightObject = document.querySelector(".img2");
imageRightObject.setAttribute("src", imageRight);


// Player names as an option:
//var playerName1 = prompt("What is your name (player1)");
//console.log("player1: ", playerName1)
//var playerName2 = prompt("What is your name(player2");
//var playerOneObject = document.getElementById("player1");
//console.log(playerOneObject)
//var playerTwoObject = document.getElementById("player2");

//playerOneObject.textContent = playerName1;
//playerTwoObject.textContent = playerName2;

// Who win:

var possibilities = ["Player 1 wins!", "Player 2 wins!", "Draw!"];
var Headline = document.querySelector("h1");
console.log(Headline)
if (randomNumber1 > randomNumber2) {
    Headline.textContent = possibilities[0];
} else if (randomNumber1 < randomNumber2) {
    Headline.textContent = possibilities[1];
} else {
    Headline.textContent = possibilities[2];
}