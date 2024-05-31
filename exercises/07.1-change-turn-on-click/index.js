let currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

// Modify this function
window.turnChanger = function turnChanger() {
	// ...-> Mario -> Juan -> Josh ->...
	switch (currentUser) {
		case "Mario":
			currentUser = "Juan";
			break;
		case "Juan":
			currentUser = "Josh";
			break;
		case "Josh":
			currentUser = "Mario";
			break;
		default:
			break;
	}

	/*if (currentUser == "Mario") {
		currentUser = "Juan";
	} else {
		currentUser = "Mario";
	}*/

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
