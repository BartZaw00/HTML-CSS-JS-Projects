const questionBtns = document.querySelectorAll('[data-button]');

questionBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        /* active - wybranie nastepnego elementu aby zmienic jego css */
        const active = e.currentTarget.nextElementSibling;
        if (button.textContent == '+') {
            button.innerHTML = '-';
            active.style.display = 'block';
        }
        else {
            button.innerHTML = '+';
            active.style.display = 'none';
        }
    });
});
