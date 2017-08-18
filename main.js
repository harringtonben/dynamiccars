console.log('shit');


var textInput = document.getElementById('textinput');
var buttonClick = document.getElementById('makecard');
var replaceCard = document.getElementById('cardcontainer')

buttonClick.addEventListener('click', function(event) {
	// console.log(textInput.value);
	var textToPrint = textInput.value;
	var printString = '';
	printString += `<div id="prettycard">`;
	printString +=   `<p>${textToPrint}</p>`;
	printString +=   `<br>`
	printString +=   `<br>`
	printString +=   `<button id="deleteCard" class="btn">Delete Me</button>`
	printString += `</div>`;
	replaceCard.innerHTML += printString;
});