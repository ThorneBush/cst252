//what element triggers(button)
//actual event(clicking,mousing over)
//What happens to that event(something shows up)

document.addEventListener('DOMContentLoaded', () => {

// update the textcontent


// update the picture


//Select the course box
// mouseover: border changes
// mouseout: border reverts back to original state

    let button = document.querySelector(".itembox");




    let highLightBox = (e) => {
        button.style.border = 'thick solid grey';
    };
    let off = (e) => {
        button.style.border = 'thin solid grey';
    };

    button.addEventListener("mouseover", highLightBox);
    button.addEventListener("mouseout", off);







//Select the course box
// Click: info pannel opens




let showPannel = (e) => {

    let infopanel = document.querySelector("#infopanel");
    infopanel.style.display = 'block';

    let courseName = document.querySelector('#courseName');
    let courseDescription = document.querySelector('#courseDescription');

    courseName.textContent = "CST 252"
    courseDescription.textContent = "This is a scripting class"
  }


button.addEventListener("click", showPannel);








//Select the exit button
// Click: closes info pannel
let exitButton = document.querySelector("#exitbutton");

let closePannel = (e) => {
  
    infopanel.style.display = 'none';
  }


exitButton.addEventListener("click", closePannel);

});