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

// Get the button element
var btn = document.getElementById("first-page");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
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

// Handle form submission
document.getElementById("friendForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var pet = document.getElementById("pet").value;

    // Handle the form data (e.g., send it to a server or process it)
    // For now, let's just log it to the console
    console.log("Name: " + name + ", Phone: " + phone + ", Pet: " + pet);

    // Close the modal after submission
    modal.style.display = "none";
});
