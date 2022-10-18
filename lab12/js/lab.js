function getRandomInt() {
	return Math.floor(Math.random() * 100);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
	  let randomNumber = getRandomInt();
	  document.querySelector('#secretNumber').textContent = randomNumber;

	  ///===============================================///

	  let inputBox = document.querySelector('#inputBox');
	  let feedback = document.querySelector('.feedback')

		let checkNumber = (e) => {
		
		let userInput = +e.currentTarget.value
		if (userInput === randomNumber) {
			console.log("that's the number");
			feedback.textContent = "that's the number"
		}
		else if (userInput > randomNumber){
			console.log("that's too big");
			feedback.textContent = "that's too big"
		}
		else {
			console.log("that's too small");
			feedback.textContent = "that's too small"
		}

		};

    inputBox.addEventListener('input', checkNumber)

  
  })