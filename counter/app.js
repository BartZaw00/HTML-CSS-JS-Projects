const number = document.querySelector('[data-number]');

const btnDecrease = document.querySelector('[data-button-decrease]');

const btnReset = document.querySelector('[data-button-reset]');

const btnIncrease = document.querySelector('[data-button-increase]');


function numberColor() {
    if (parseInt(number.innerHTML) > 0)
        number.style.color = 'green';
    else if (parseInt(number.innerHTML) < 0)
        number.style.color = 'red';
    else
        number.style.color = 'black';
}


btnDecrease.addEventListener('click', () => {
    number.innerHTML -= 1;
    numberColor();
})

btnIncrease.addEventListener('click', () => {
    number.innerHTML = parseInt(number.innerHTML) + 1;
    numberColor();
})

btnReset.addEventListener('click', () => {
    number.innerHTML = 0;
    numberColor();
})