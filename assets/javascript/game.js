$(document).ready(function() {

//Variables
	var counter = 0;
	var wins = 0;
	$("#wins").text(wins);

	var losses = 0;
	$("#losses").text(losses);

	var numberChosen = Math.floor(Math.random() * (120 - 19 + 1) + 19);
	$("#number-chosen").text(numberChosen);

	var redValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	var blueValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	var yellowValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	var greenValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);

//Functions

function newGame() {
	counter = 0;
	$("#totalScore").text(counter);

	numberChosen = Math.floor(Math.random() * (120 - 19 + 1) + 19);
	$("#number-chosen").text(numberChosen);
	console.log(numberChosen);

	redValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	blueValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	yellowValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	greenValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
}

function winOrLose() {
	if (counter === numberChosen) {
		alert("Congratulations! You Win!");
		wins++;
		$("#wins").text(wins);
		newGame();
	} else if (counter > numberChosen) {
		alert("I'm sorry. Please try again.");
		losses++;
		$("#losses").text(losses);
		newGame();
	}
}
	//Game
	$(".red-crystal").on("click", function() {
		counter += redValue;
		console.log(counter);
		$("#totalScore").text(counter);
		winOrLose();
	})

	$(".blue-crystal").on("click", function() {
		counter += blueValue;
		console.log(counter);
		$("#totalScore").text(counter);
		winOrLose();
	})

	$(".yellow-crystal").on("click", function() {
		counter += yellowValue;
		console.log(counter);
		$("#totalScore").text(counter);
		winOrLose();
	})

	$(".green-crystal").on("click", function() {
		counter += greenValue;
		console.log(counter);
		$("#totalScore").text(counter);
		winOrLose();
	});

});