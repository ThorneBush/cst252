
document.addEventListener('DOMContentLoaded', () => {

    let boxes = document.querySelectorAll('.blueBox');

    boxes.forEach((box) => {
        box.style.backgroundColor = '#F0E68C'

        let addBorder = (e) => {
            e.currentTarget.style.border = 'solid black';
        };

        box.addEventListener('click', addBorder);

    })

});