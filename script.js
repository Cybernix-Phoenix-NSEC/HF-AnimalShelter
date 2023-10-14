console.log("Hello World !");
let a = document;
let txt = "box"

a= document.all;
b= document.links;
c= document.scripts;

Array.from(a).forEach(function(element){
	if(String(element).includes(txt)){
		console.log(element);
	}
});
console.log(b);
console.log(c);

var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("first-page");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}