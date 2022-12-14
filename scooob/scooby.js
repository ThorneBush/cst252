document.addEventListener("DOMContentLoaded", () => {

    let scooby = document.querySelector('.scooby');

        let showText = (e) => {
            let text = document.querySelector("#div2");
                text.textContent = 'YOU WIN!';} 

        scooby.addEventListener('click', showText);
       
    })