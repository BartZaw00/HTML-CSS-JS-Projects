const sideBtn = document.querySelector('[data-nav-toggle]');

const sidebarContent = document.querySelector('[data-nav-content]');

const sidebarIcons = document.querySelector('[data-nav-icons]');


sideBtn.addEventListener('click', () => {
        sidebarContent.classList.toggle('right');
        sidebarIcons.classList.toggle('right');
        sideBtn.classList.toggle('btn-image');
});