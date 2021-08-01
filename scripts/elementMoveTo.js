/**
 * Move element with data-move-to attribute.
 * data-move-to="#toElement breake-point"
 */
export default function () {
    let elements = [];

    // iteraеу all element which needs to move
    document.querySelectorAll('*[data-move-to]').forEach(elem => {
        elements.push([
            elem, // save element to manipulate it
            // get data from data-attribute (move-to, break point)
            ...elem.getAttribute('data-move-to').split(' '),
            elem.parentElement // save start position to return element back
        ]);
    });

    function move() {
        // iterate all element
        elements.forEach(elem => {
            // check do we need to move them
            if (window.innerWidth <= elem[2]) {
                // move element in elemnt from data-move-to
                document.querySelector(elem[1]).appendChild(elem[0]);
            } else {
                // move back
                if (elem[3]) elem[3].appendChild(elem[0]); // move element to start position
            }
        });
    }

    move();
    window.addEventListener('resize', move); // update on resize
}