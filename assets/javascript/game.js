// Variables
$(document).ready(function() {

	var numberChosen;
	var counter;
	var wins = 0;
	var losses = 0;
	var crystalValues;

function newGame() {
	numberChosen = Math.floor(Math.random() * (120 - 19 + 1) + 19);
	$("#number-chosen").text(numberChosen);
	console.log(numberChosen);

	//Assign four random variables to each of the crystals
	for (var i = 0; i < 4; i++) {
		crystalValues = Math.floor(Math.random() * (12 - 1 + 1) + 1);
		console.log(crystalValues);

		var crystalImages = $("<img>");
		crystalImages.addClass("crystal-images");
		crystalImages.attr("crystal-values", crystalValues[i]);
		$("#crystals").append(crystalImages);
	}
}


//What happens when you click on a crystal
$(".crystal-images").on("click", function() {
	var crystalValue = ($(this).attr("crystal-values"));
	crystalValue = parseInt(crystalValue);
	counter += crystalValue;
	console.log(counter);

	$("#score").text(counter);

	if (counter === numberChosen) {
		alert("Congratulations! You Win!");
		wins++;
		$("#wins").text(wins);
		newGame();
	} else {
		alert("I'm sorry. Please try again.");
		losses++;
		$("#losses").text(losses);
		newGame();
	}
})
newGame();
});
	
