
document.addEventListener('DOMContentLoaded', () => {

    //====== btn "Click Me!" ======//

    //selects objects with the class "btn" and gives it a variable
    let button = document.querySelector(".btn");
    // Function green turns background colors green
    let green = (e) => {
        
        button.style.backgroundColor = 'green'

    };
    //when the button is clicked, it activates the "green" function
    button.addEventListener("click", green);

    //====== btn "Add" ======//

    //creates a button element and gives it some text and two classes
    let oneEl = document.createElement("button")
        oneEl.textContent = "Yoooo I'm another button";
        oneEl.classList.add('btn')
        oneEl.classList.add('v3')
    //selects the empty div with the class "output" and gives it a variable
    let parent = document.querySelector('.output');
    // targets the second button with the "v2" class and gives it a variable
    let add = document.querySelector(".v2");
    //this function adds the 'oneEl' element and appends it to the div with the "output" class
    let makeNew = (e) => {
        console.log('you clicked');

        parent.appendChild(oneEl);

    };
    //when the button is clicked, it activates the "makeNew" function
    add.addEventListener("click", makeNew);
    
});
