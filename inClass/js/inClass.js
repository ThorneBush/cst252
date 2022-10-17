
document.addEventListener('DOMContentLoaded', () => {

    // ========= BUTTON =========//

    let btn = document.querySelector("#btn");
    
    let handler = (e) => {
        console.log('you clicked');
        console.log(e);
    };

    btn.addEventListener("click", handler);



// ========= MULTIPLE BUTTONS =========//

    let btn1 = document.querySelector('#btn1');
    let btn2 = document.querySelector('#btn2');

    let changeText = (e) => {
        e.currentTarget.textContent = 'You Clicked Me!'
    };

  btn1.addEventListener('click', changeText);
  btn2.addEventListener('click', changeText);



// ========= LOOPS =========//

let boxes = document.querySelectorAll('.loopBox');

boxes.forEach((box) => {box.style.backgroundColor = 'black'})
// let turnBlackFunction = (boxes) => {
//   boxes.style.backgroundColor = 'black';

// };

// boxes.forEach(turnBlackFunction)

});