import goToElement from "./goToElement";
import toggleMenu from "./toggleMenu";

/**
 * get all elements wiht data-goto attribute 
 * and set click event to scroll page to element from data-goto
 */
export default function () {
    let links = document.querySelectorAll('*[data-goto]');

    if (links.length > 0) {
        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                if (e.target.dataset.goto) goToElement(e.target.dataset.goto);

                console.log(e.target);
                // close meny if burger menu is open
                if (
                    document.querySelector('.menu__icon')
                    .classList.contains('_active')
                ) toggleMenu();
            });
        });
    }
}