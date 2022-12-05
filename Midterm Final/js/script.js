
document.addEventListener('DOMContentLoaded', () => {
    // === Flashlight Code === //


    // === Open/Close Drawers === //
    let knob = document.querySelectorAll('.knob');
	knob.forEach ((e) => {

        let toggle = (e) => {

            let pages = e.currentTarget.parentElement.querySelectorAll('.drawer .pages')
            
            if (!e.currentTarget.classList.contains('on')) {
                e.currentTarget.classList.add("on");
                pages.forEach((box) => {box.classList.remove("closed")})
              }
    
            else{
                e.currentTarget.classList.remove("on");
                pages.forEach((box) => {box.classList.add("closed")})
            }
        } 
		e.addEventListener	('click', toggle);
	});

    // === Testing === //

    

    

});

let cat = {
    
    name: 'Kyle',
    says: function () {
        console.log('meow');

    }
};