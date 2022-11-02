document.addEventListener("DOMContentLoaded", () => {

	let box = document.querySelector('.box');

	//box.classList.add('boxToggleClass');
	let activateAnimation = () => {
		box.classList.toggle('boxToggleClass');
	}

	box.addEventListener('click', activateAnimation);
	// setInterval(activateAnimation, 3000);

	///////////////////
	let boxHover = (e) => {
		box.classList.add('box-end-frame', 'fadeInAnimation');
		box.classList.remove('fadeOutAnimation');
	}

	box.addEventListener('mouseover', boxHover);

	let boxOut = (e) => {
		box.classList.remove('box-end-frame');
		box.classList.add('fadeOutAnimation');
		box.classList.remove('fadeInAnimation')
	}

	box.addEventListener('mouseout', boxOut);

	// let hoverEffect = () => {
	// 	box.classList.toggle('hoverBold');
	// }
	// box.addEventListener('mouseover', hoverEffect);












});