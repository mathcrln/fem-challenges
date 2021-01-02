// function toggleMenu() {
// 	const button = document.getElementById('top-menu').firstElementChild;
// 	if (button.style.display === 'flex') {
// 		button.style.display = 'none';
// 	} else {
// 		button.style.display = 'flex';
// 	}
// }

const menuButton = document.getElementById('menu-toggle');

menuButton.addEventListener('click', function (e) {
	const menuUL = document.getElementById('top-menu').querySelector('ul');
	const menuIcon = menuButton.querySelector('img');

	if (menuUL.style.display === 'flex') {
		menuUL.classList.remove('js-mobile-menu', 'dark-background');
		menuIcon.setAttribute('src', './assets/images/icon-hamburger.svg');
		menuUL.style.display = 'none';

		//
		document.body.style.overflow = 'auto';
		// document.body.style.height = 'auto';
	} else {
		menuUL.classList.add('js-mobile-menu', 'dark-background');
		menuUL.style.display = 'flex';
		document.body.style.overflow = 'hidden';
		// document.body.style.height = '100%';

		// Adding closing button
		menuIcon.setAttribute('src', './assets/images/icon-close.svg');
	}
});
