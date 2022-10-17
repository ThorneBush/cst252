document.addEventListener('DOMContentLoaded', () => {


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
// update the picture*
// update the coursename
// update the description


let showPannel = (e) => {

    let infopanel = document.querySelector("#infopanel");
    infopanel.style.display = 'block';

    let courseName = document.querySelector('#courseName');
    let courseDescription = document.querySelector('#courseDescription');

    let buttonImage = e.currentTarget.querySelector('img')
    panelImage = document.querySelector('#courseimage')

    courseName.textContent = "CST 252";
    courseDescription.textContent = "This is a scripting class";
    buttonImage.src='';
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