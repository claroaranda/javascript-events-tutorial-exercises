window.onload = function loadFn() {

	let buttonElm = document.getElementById("btn1");
	buttonElm.addEventListener("click", function(event) {
		alert("Has dado un clic en el botón: " + buttonElm.id);
	});

	let anchorElm = document.getElementById("anchor1");
	anchorElm.addEventListener("click", function(event) {
		alert("Has dado un clic en el enlace: " + anchorElm.id);
	});

	let imageElm = document.getElementById("img1");
	imageElm.addEventListener("click", function(event) {
		alert("Has dado un clic en la imágen: " + imageElm.id);
	});
	
	
	/* let containerElm = document.getElementById("container");

	containerElm.addEventListener("click", function(event) {
		// Your code here
		//alert(event.target);

		switch (event.target) {
			case `[object HTMLButtonElement]`:
				alert("Has dado un clic en el botón: " + buttonElm.id);
				break;
			case '[object HTMLButtonElement]':
				alert("Has dado un clic en el enlace: " + anchorElm.id);
				break;
			case '[object HTMLImageElement]':
				alert("Has dado un clic en la imágen: " + imageElm.id);
				break;
			default:
				break;
		}
	}); */
};
