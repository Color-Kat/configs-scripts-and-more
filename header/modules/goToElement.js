import toggleMenu from "./toggleMenu";

/**
 * get element by selector and scroll to it
 * @param {string} selector of element to be scrolled to
 */
export default function (selector) {
    // get elem by param selector
    let elem = document.querySelector(selector);
    console.log(elem);

    if (elem) {
        const goToValue = elem.getBoundingClientRect().top + // get height from top of the block to top of the window
            pageYOffset - // add scrolled height
            document.querySelector('header').offsetHeight; // minus height of header

        window.scrollTo({
            top: goToValue,
            behavior: 'smooth'
        });
    }
}