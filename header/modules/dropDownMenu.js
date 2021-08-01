/**
 * get all menu arrows and add click event to add class _active to parent
 *  */
export default function () {
    // get all menu__arows on the page
    let menuArrows = document.querySelectorAll('.menu__arrow');

    if (menuArrows.length > 0) {
        for (let i = 0; i < menuArrows.length; i++) {
            const menuArrow = menuArrows[i];
            // click on parent (can add click on arrow if it is link)
            menuArrow.addEventListener('click', function () {
                // hide all drop down menu instead of current
                menuArrows.forEach(elem =>
                    elem != menuArrow ? elem.parentElement.classList.remove('_active') : null
                );


                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
}