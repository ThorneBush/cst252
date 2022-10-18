
document.addEventListener('DOMContentLoaded', () => {

    let boxes = document.querySelectorAll('.blueBox');

    //select every box with .boxes and apply 2 attributes
    boxes.forEach((box) => {

        //attribute #1: Color all boxes yellow
        box.style.backgroundColor = '#F0E68C'

        //attribute #2: Add a function to all boxes to make them have a border when clicked
        let addBorder = (e) => {
            e.currentTarget.style.border = 'solid black';
        };

        box.addEventListener('click', addBorder);

    })

});