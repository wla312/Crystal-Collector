// Crystal Collector Game

// create the beginnings of a target score

var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

$("#targetScore").html("Target Number: " + targetNumber);

// create a scoreboard
var wins = 0;
var losses = 0;
var counter = 0;

// code to assign random values 1-12 to the four crystals
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var numberRandomizer = numberOptions[Math.floor(Math.random() * numberOptions.length)];
// var slicePH;
var fourNumbers = [];

for (var i=0; i<4; i++) {
	// slicePH = numberOptions.slice(numberRandomizer, numberRandomizer + 1);
	// fourNumbers.push(slicePH);

	// can not get it to guarantee that it will be four DIFFERENT numbers
	
	fourNumbers.push(numberOptions[Math.floor(Math.random() * numberOptions.length)]);
}

// add four images to the page and assign fourNumbers
	var yellowCrystal = $("<img>");
	yellowCrystal.addClass("crystal-image");
	yellowCrystal.attr("src", "assets/images/yellowcrystal.png");
	yellowCrystal.attr("data-crystalvalue", fourNumbers[0]);
	$("#crystals").append(yellowCrystal);

	var redCrystal = $("<img>");
	redCrystal.addClass("crystal-image");
	redCrystal.attr("src", "assets/images/redcrystal.png");
	redCrystal.attr("data-crystalvalue", fourNumbers[1]);
	$("#crystals").append(redCrystal);

	var greenCrystal = $("<img>");
	greenCrystal.addClass("crystal-image");
	greenCrystal.attr("src", "assets/images/greencrystal.png");
	greenCrystal.attr("data-crystalvalue", fourNumbers[2]);
	$("#crystals").append(greenCrystal);

	var blueCrystal = $("<img>");
	blueCrystal.addClass("crystal-image");
	blueCrystal.attr("src", "assets/images/bluecrystal.png");
	blueCrystal.attr("data-crystalvalue", fourNumbers[3]);
	$("#crystals").append(blueCrystal);



// create an on-click event for image class "crystal-image"
$(".crystal-image").on("click", function() {
	// testing functionality
	console.log("crystal values: " + fourNumbers);

	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);

	counter += crystalValue;
	$("#currentScore").html("Your Current Score: " + counter);

	// check if click counter matches targetNumber
	if (counter === targetNumber) {
		wins++;
		$("#winlose").html("you win!");
		counter = 0;
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#targetScore").html("Target Number: " + targetNumber);
		$("#currentScore").html("Your Current Score: 0 ");
		// can't get it to re-select fourNumbers
	}
	// if click counter exceeds targetNumber
	else if (counter >= targetNumber) {
		$("#winlose").html("you lose!");
		losses++;
		counter = 0;
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#targetScore").html("Target Number: " + targetNumber);
		$("#currentScore").html("Your Current Score: 0 ");
		// can't get it to re-select fourNumbers
		// clear the "you win"/"you lose" on new iteration of the game
	}

	// update scoreboard with wins and losses
	$("#scoreboard").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>")

});