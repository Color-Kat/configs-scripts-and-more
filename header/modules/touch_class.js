import isMobile from './isMobile';

/**
 * add _touch class to body if device is mobile
 */
export default function () {
    if (isMobile()) document.body.classList.add('_touch');
    else document.body.classList.add('_pc');
}