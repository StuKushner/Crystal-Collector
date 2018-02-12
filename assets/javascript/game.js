$(document).ready(function() {

//variables

var totalScore = 0;
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);

var numberChosen = Math.floor(Math.random() * 120 - 19 + 1) + 19;
$("#number-chosen").text(numberChosen);
console.log("Number Chosen = " + numberChosen);

var redValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
console.log("Red Value = " + redValue);
var blueValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
console.log("Blue Value = " + blueValue);
var yellowValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
console.log("Yellow Value = " + yellowValue);
var greenValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
console.log("Green Value = " + greenValue);

// logic

$(".red-crystal").on("click", function() {
	totalScore += redValue;
	$("#totalScore").text(totalScore);
	console.log("Total Score = " + totalScore);
	winOrLose();
})

$(".blue-crystal").on("click", function() {
	totalScore += blueValue;
	$("#totalScore").text(totalScore);
	console.log("Total Score = " + totalScore);
	winOrLose();
})

$(".yellow-crystal").on("click", function() {
	totalScore += yellowValue;
	$("#totalScore").text(totalScore);
	console.log("Total Score = " + totalScore);
	winOrLose();
})

$(".green-crystal").on("click", function() {
	totalScore += greenValue;
	$("#totalScore").text(totalScore);
	console.log("Total Score = " + totalScore);
	winOrLose();
});

// functions

function newGame() {
	numberChosen = Math.floor(Math.random() * 120 - 19 + 1) + 19;
	$("#number-chosen").text(numberChosen);
	console.log("Number Chosen = " + numberChosen);

	totalScore = 0;
	$("#totalScore").text(totalScore);

	redValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
	console.log("Red Value = " + redValue);
	blueValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
	console.log("Blue Value = " + blueValue);
	yellowValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
	console.log("Yellow Value = " + yellowValue);
	greenValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
	console.log("Green Value = " + greenValue);
}

function winOrLose() {
	if(totalScore === numberChosen) {
		alert("Congratulations! You Win!");
		wins++;
		$("#wins").text(wins);
		newGame();
	} else if (totalScore > numberChosen) {
		alert("I'm sorry, but you went above " + numberChosen + " and hit " + totalScore + ". Please try again.");
		losses++;
		$("#losses").text(losses);
		newGame();
	}
}

});