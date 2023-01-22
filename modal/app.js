const btnModal = document.querySelector('[data-button]');

const btnModalExit = document.querySelector('[data-button-exit]');

const modal = document.querySelector('[data-modal]');


btnModal.addEventListener('click', () => {
    modal.classList.add('show-modal');
});

btnModalExit.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});