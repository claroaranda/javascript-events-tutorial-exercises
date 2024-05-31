window.onload = function() { //myLoadFunction
	alert("The website just finished loading!");
	// Some code here
	let btn = document.getElementById("theGreen");
	btn.addEventListener("click", myClickFunction);
};

// The listener function here
function myClickFunction() {
	alert("woohoo!");
}