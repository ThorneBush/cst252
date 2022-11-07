
document.addEventListener('DOMContentLoaded', () => {

    //==========================MAIN-MENU==========================//

    let menuButton = document.querySelector('.major');
    let menuItems = document.querySelector('#menu ul.listMain');

    let openMenu = (e) => {

        if (!menuButton.classList.contains('active')) {    
            e.currentTarget.classList.add("active");
            menuItems.style.left = '0px';
            menuItems.style.opacity = '1';
          }
        else{
            e.currentTarget.classList.remove("active");
            menuItems.style.left = '-300px';
            menuItems.style.opacity = '0';

        }
    };

    menuButton.addEventListener('click', openMenu);


	//==========================SUB-MENU==========================//

	let opener = document.querySelectorAll('#menu ul .opener');
    

    opener.forEach((box) => {
        let toggleBorder = (e) => {

            let subItem = e.currentTarget.parentElement.querySelectorAll('li ul a')

            if (e.currentTarget.classList.contains('active')) {
                
                e.currentTarget.classList.remove("active");

				subItem.forEach((box) => {box.style.display = 'none'})

              }
            else{
               e.currentTarget.classList.add("active");

               subItem.forEach((box) => {box.style.display = 'block'})

			   e.currentTarget.style.border = 'none';

            }
        };

        box.addEventListener('click', toggleBorder);
    })

});