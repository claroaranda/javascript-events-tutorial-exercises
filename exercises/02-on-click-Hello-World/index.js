// Declare your function here
window.onload = function() {
    let btn = document.getElementById("hello");
    btn.addEventListener("click", myClickFunction);
}

function myClickFunction() {
    alert("Hola");
}