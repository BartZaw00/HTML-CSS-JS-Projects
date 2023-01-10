const container = document.querySelector('#container');

const simpleBtn = document.querySelector('[data-simple-button]');

const hexBtn = document.querySelector('[data-hex-button]');

const clickmeBtn = document.querySelector('[data-clickme-button]');

const dataColor = document.querySelector('[data-color');

const colorArray = ['blue', '#f1f5f8', 'rgb(120,100,1)', '#a3f2b3', '#31ef8f', 'rgb(10,105,10)', 'rgb(210,5,120)', 'yellow', '#abc321', '#ffe3a1'];
let randomNumber = 0;
let numbers = [];
let result = '';
let hexaChars = '';
let state = "a";

simpleBtn.addEventListener('click', () => {
    state = "a";
})

hexBtn.addEventListener('click', () => {
    state = "b";
})

clickmeBtn.addEventListener('click', () => {
    if (state === "a") {
        randomNumber = getRandomNumber();
        dataColor.innerHTML = colorArray[randomNumber];
        dataColor.style.color = colorArray[randomNumber];
        container.style.background = colorArray[randomNumber];
    }
    else if (state === "b") {
        numbers = [];
        for (let i = 0; i < 6; i++)
            numbers.push(Math.floor(Math.random() * 16));
        hexaChars = numbers.map(num => {
            console.log('numer:' + num)
            if (num > 9) return String.fromCharCode(num + 87);
            return num;
        });
        result = "#" + hexaChars.join('');
        dataColor.innerHTML = result;
        dataColor.style.color = result;
        container.style.background = result;
    }
})

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}