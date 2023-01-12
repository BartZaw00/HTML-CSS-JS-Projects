const btnModal = document.querySelector('[data-button]');

const btnModalExit = document.querySelector('[data-button-exit]');

const modal = document.querySelector('[data-modal]');


btnModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnModalExit.addEventListener('click', () => {
    modal.style.display = 'none';
});