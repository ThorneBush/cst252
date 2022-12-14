document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector(".button");
    
    let showPopup = (e) => {
    
        let popup = document.querySelector(".popup");
        popup.style.display = "block";
    }
    
    button.addEventListener('click', showPopup); 
    
    document.addEventListener('mouseup', function(e) {
        var container = document.getElementById('popup');
        if (!popup.contains(e.target)) {
            popup.style.display = 'none';
        }
    });

})