const menuBtn = document.querySelector('[data-menu-button]');

const navbar = document.querySelector('[data-navbar]');

const menuScroll = document.querySelector('[data-menu-scroll]');

const arrowUpButton = document.querySelector('[data-arrow-up-button]');


menuBtn.addEventListener('click', () => {
    // Dodaje klasę "active", jeśli nie istnieje i usunie ją, jeśli istnieje
    menuScroll.classList.toggle('active');
});

window.addEventListener("scroll", function () {
    if (window.scrollY < 100) navbar.classList.remove('shrink');
    else navbar.classList.add('shrink');
    if (window.scrollY < 500) arrowUpButton.classList.remove('display-block');
    else arrowUpButton.classList.add('display-block');
});