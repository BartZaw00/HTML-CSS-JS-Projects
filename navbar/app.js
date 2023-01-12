const sideBtn = document.querySelector('[data-button]');

const sidebar = document.querySelector('[data-sidebar]');



sideBtn.addEventListener('click', () => {
    if (sidebar.style.right == '0px') {
        sidebar.style.right = '-250px';
        sideBtn.style.backgroundImage = 'url("images/menu.png")';
    }
    else {
        sidebar.style.right = '0px';
        sideBtn.style.backgroundImage = 'url("images/close.png")';
    }
});