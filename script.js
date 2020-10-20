// I need to enable the menu button to perceive clicks
// I need the rest of the nav to be visible when the menu button is clicked...
// ...and the menu icon to change to an X
// I need the nav to disappear when the menu is clicked again.

const menu_icon = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');

menu_icon.addEventListener('click', e => {
	showNavBar();
})

	function showNavBar (argument) {
	//this function shows the rest of the nav when the menu_icon is clicked
		
		menu_icon.classList.toggle('close-menu');
		nav.classList.toggle('showNav-links');
	}

