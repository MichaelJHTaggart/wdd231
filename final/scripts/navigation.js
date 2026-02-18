// Use JavaScript to support the responsive menu.
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar')


navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
    navbutton.setAttribute('aria-label', navbutton.classList.contains('show') ? 'Close navigation menu' : 'Open navigation menu');
})