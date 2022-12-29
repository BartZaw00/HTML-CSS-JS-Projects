const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.history-btn');


let result = '';


function displayNumbers() {
    /* Jeżeli ktoś kliknie kropkę to currentNumber będzie zawierał kropkę */
    if (this.textContent === '.' && currentNumber.innerHTML.includes('.'))
        return;
    if (this.textContent === '.' && currentNumber.innerHTML === '')
        return currentNumber.innerHTML = '.0';

    currentNumber.innerHTML += this.textContent;
}

function operate() {

    if (currentNumber.innerHTML === '' && this.textContent === '-') {
        currentNumber.innerHTML = '-';
        return;
    }
    /* nie pokazuj operatorow na ekranie, gdy jest on pusty */
    else if (currentNumber.innerHTML === '')
        return;

    if (mathSign.innerHTML !== '')
        showResult();

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResult() {
    if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '')
        return;
    let a = Number(currentNumber.innerHTML); /* zmiana stringu na numer */
    let b = Number(previousNumber.innerHTML); /* zmiana stringu na numer */
    let operator = mathSign.innerHTML;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = a * b;
            break;
        case ':':
            result = b / a;
            break;
        case '2^':
            result = b ** a;
    }

    addToHistory();
    historyBtn.classList.add('active'); /* dodaj do listy klas klasę active */
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function addToHistory() {
    const newHistoryItem = document.createElement('li'); 
    /* stwórz element li */
    newHistoryItem.innerHTML = `${currentNumber.innerHTML} 
    ${mathSign.innerHTML} ${previousNumber.innerHTML} = ${result}`
    newHistoryItem.classList.add('history-item'); 
    /* do elementu li dodajemy klasę history-item */
    calculatorHistory.appendChild(newHistoryItem);
    /* do klasy history dodajemy elementy dzieci */
}

function clearHistory() {
    calculatorHistory.innerHTML = '';
    if(calculatorHistory.textContent === '')
        historyBtn.classList.remove('active');
}

function clearScreen() {
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}
















// Nasluchiwanie przyciskow

operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers);
})

historyBtn.addEventListener('click', clearHistory);