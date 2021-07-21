/**
 * toggle class _active in .icon__menu and .menu__body
 */
export default function () {
    let iconMenu = document.querySelector('.menu__icon');
    let bodyMenu = document.querySelector('.menu__body');

    if (iconMenu && bodyMenu) {
        // lock scroll body
        document.body.classList.toggle('_scroll-lock');

        // toggle _active class
        iconMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_active');
    }
}