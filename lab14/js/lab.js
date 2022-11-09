document.addEventListener("DOMContentLoaded", () => {


	//putting the input box into a variable
	let inputBox = document.querySelector('.guessingBox');


	//input event - what should happen:
	////check if they entered the right number
	////if so
	/////////create a new div
	/////////set the div to have a message "you won!"
	let inputHandler = (e) => {

		if (e.currentTarget.value === '6') {
			console.log('test')

			let newBox = document.createElement('div');
				newBox.classList.add('box');
				newBox.textContent = 'You won!';

				document.body.appendChild(newBox);

			
		}

	}

	inputBox.addEventListener('input', inputHandler);





});
