const menuBtn = document.querySelector('[data-menu-button]');

const navbar = document.querySelector('[data-navbar]');


menuBtn.addEventListener('click', () => {

});

window.addEventListener("scroll", function() {
    navbar.classList.add('shrink');
});