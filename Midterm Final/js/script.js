
document.addEventListener('DOMContentLoaded', () => {
    // === Flashlight Code === //
    
    //flashlight js example from codemyui.com
    function update(e){
        console.log(e.touches)
        var x = e.clientX 
        var y = e.clientY 
    
        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
    }
    
    document.addEventListener('mousemove',update)
    document.addEventListener('touchmove',update)

    // === Open/Close Drawers === //
    let knob = document.querySelectorAll('.knob');
	knob.forEach ((e) => {

        let toggle = (e) => {

            let pages = e.currentTarget.parentElement.querySelectorAll('.drawer .pages')
            //if the drawer knob is in an open state close it, and visa versa
            if (!e.currentTarget.classList.contains('on')) {
                e.currentTarget.classList.add("on");
                pages.forEach((box) => {box.classList.remove("closed")})
              }
    
            else{
                e.currentTarget.classList.remove("on");
                pages.forEach((box) => {box.classList.add("closed")})
            }
        } 
		e.addEventListener	('click', toggle);
	});


    // === Open Popup === //

    let button = document.querySelectorAll('.page');
    let image = document.querySelector('img')
    color = '';

    //organizes the urls into their color names
    let imageURL = {
		red: 'img/red.png',
		blue: 'img/blue.png',
        green: 'img/green.png',
        win: 'img/Scooby.png'
	};

    let clicktext = (e) => {
        //selects the file data and and adds the corresponding img
        selectedButton = e.currentTarget.dataset.color;
        color = selectedButton;
        image.src = imageURL[selectedButton];
        //sets the content of the text to an empty string
        let text = document.querySelector("#div2");
        text.textContent = ''
        //makes the popup screen visable
        let popup = document.querySelector(".popup");
        popup.style.display = "block";
    };

    button.forEach(e => {
		e.addEventListener('click', clicktext);
    });

//close button
    let closeButton = document.querySelector('.close');
    //when the close button is clicked, it turns to pop up display to "none"
    let close = (e) => {
        let popup = document.querySelector(".popup");
        popup.style.display = "none";
    };

    closeButton.addEventListener('click', close);
	
//scooby win

    let popImg = document.querySelector('.popup img');

    let showText = (e) => {
        //this puts the "you won" or "you lose" depending on the img url
        if (e.currentTarget.getAttribute('src') === 'img/Scooby.png') {
            let text = document.querySelector("#div2");
            text.textContent = 'YOU WON!'
          }

        else if(e.currentTarget.getAttribute('src') === 'img/red.png' || 'img/green.png' || 'img/blue.png') {
            let text = document.querySelector("#div2");
            text.textContent = 'YOU LOSE'
          }

       
    ;} 

    popImg.addEventListener('click', showText);


	});