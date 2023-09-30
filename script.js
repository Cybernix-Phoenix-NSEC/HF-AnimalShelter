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