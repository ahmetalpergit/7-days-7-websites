'use strict';

const nav = document.querySelector('.nav');
const logo = document.getElementById('logo');
const handleScroll = () => {
    if (window.pageYOffset > 50) {
        nav.classList.add('nav-BG');
        logo.classList.remove('logo--white')
        logo.classList.add('logo--black')
    } else {
        nav.classList.remove('nav-BG');
        logo.classList.remove('logo--black')
        logo.classList.add('logo--white')
    }
}
window.addEventListener('scroll', handleScroll);