const menuBtn = document.querySelector('[data-menu-button]');

const navbar = document.querySelector('[data-navbar]');


menuBtn.addEventListener('click', () => {

});

window.addEventListener("scroll", function() {
    if (window.scrollY < 100) navbar.classList.remove('shrink');
    else navbar.classList.add('shrink');
});