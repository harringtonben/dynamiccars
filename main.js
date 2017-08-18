console.log('shit');


var textInput = document.getElementById('textinput');
var buttonClick = document.getElementById('makecard');
var replaceCard = document.getElementById('cardcontainer');


//card creator function

buttonClick.addEventListener('click', function(event) {
	// console.log(textInput.value);
	var textToPrint = textInput.value;
	var printString = '';
	printString += `<div id="prettycard">`;
	printString +=   `<p>${textToPrint}</p>`;
	printString +=   `<br>`
	printString +=   `<br>`
	printString +=   `<button id="deletecard" class="btn">Delete Me</button>`
	printString += `</div>`;
	replaceCard.innerHTML += printString;
});


//delete card function; 

document.body.addEventListener('click', function(event) {
	if (event.target.parentNode.id === 'prettycard')
	event.target.parentNode.remove();
});


