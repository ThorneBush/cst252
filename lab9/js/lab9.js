
document.addEventListener('DOMContentLoaded', () => {

    //btn "Click Me!"
    let button = document.querySelector(".btn");

    let green = (e) => {
        console.log('you clicked');
        console.log(e);
        button.style.backgroundColor = 'green'

    };

    button.addEventListener("click", green);

    //btn "Add"

    let oneEl = document.createElement("button")
        oneEl.textContent = "Yoooo I'm another button";
        oneEl.classList.add('btn')
        oneEl.classList.add('v3')

    let parent = document.querySelector('.output');

    let add = document.querySelector(".v2");

    let makeNew = (e) => {
        console.log('you clicked');

        parent.appendChild(oneEl);

    };

    add.addEventListener("click", makeNew);
    
});
