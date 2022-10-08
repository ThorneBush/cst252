
document.addEventListener('load', () => {

    // ========= BUTTON =========//

    let button = document.querySelector("#btn");

    let handler = (e) => {
        console.log('you clicked');
        console.log(e);
    };

    button.addEventListener("click", handler);

});
