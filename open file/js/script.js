document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelectorAll('.page');
    let content = document.querySelector('.content');
    let image = document.querySelector('img')
    color = '';

    let imageURL = {
		red: 'img/red.png',
		blue: 'img/blue.png',
        green: 'img/green.png'
	};

    let clicktext = (e) => {
        selectedButton = e.currentTarget.dataset.color;
        color = selectedButton;
        image.src = imageURL[selectedButton];
        
        content.classList.remove('red', 'green', 'blue');
        content.classList.add(selectedButton);
    };

    button.forEach(e => {
		e.addEventListener('click', clicktext);
	});


});
