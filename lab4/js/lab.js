function flowerFunction() {
	//initialize();
	
	//YOUR CODE GOES RIGHT HERE 

	
	document.querySelector("#flower5 .center").textContent = document.querySelector("#flower1 .center").textContent + document.querySelector("#flower3 .center").textContent;
	//
	document.querySelector("#flower5 .center").style.backgroundColor = "purple";
	//this code selects the last flower and styles the center "purple"
	document.querySelector("#flower5 .center").style.color = "white";
	//this code selects the last flower and styles the text "white"

	document.querySelector(`#flower1`).style.marginTop = "100px";
	document.querySelector(`#flower2`).style.marginTop = "100px";
	document.querySelector(`#flower3`).style.marginTop = "100px";
	document.querySelector(`#flower4`).style.marginTop = "100px";
	document.querySelector(`#flower5`).style.marginTop = "100px";

	// DO NOT PUT ANY CODE AFTER THIS POINT
}


function initialize() {
	//DO NOT CHANGE ANY OF THIS CODE
	document.querySelector("#flower1 .center").textContent = randomNumber();
	document.querySelector("#flower3 .center").textContent = randomNumber();
		


}


function randomNumber() {
	return Math.floor(Math.random() * 10);
}