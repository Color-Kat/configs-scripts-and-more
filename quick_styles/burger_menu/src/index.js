// import './css/style.css';
import './scss/style.scss';
import touch_class from './modules/touch_class';
import dropDownMenu from './modules/dropDownMenu'
import goToLinks from './modules/goToLinks';
import toggleMenu from './modules/toggleMenu';

touch_class(); // add to body _pc or _touch class
dropDownMenu(); // functional for drop-down menu
goToLinks(); // functional for scrolling onclick goto link

// click on menu-burger
let menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
    menuIcon.addEventListener('click', toggleMenu);
    // lock scroll body
    // document.body.classList.toggle('_scroll-lock');

    // togle _active
    // menuIcon.classList.toggle('_active');
    // document.querySelector('.menu__body').classList.toggle('_active');
    // })
}