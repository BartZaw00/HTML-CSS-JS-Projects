const container = document.querySelector('#container');

const simpleBtn = document.querySelector('[data-simple-button]');

const hexBtn = document.querySelector('[data-hex-button]');

const clickmeBtn = document.querySelector('[data-clickme-button]');

const dataColor = document.querySelector('[data-color');

const colorArray = ['blue', '#f1f5f8', 'rgb(120,100,1)', '#a3f2b3', '#31ef8f', 'rgb(10,105,10)', 'rgb(210,5,120)', 'yellow', '#abc321', '#ffe3a1'];

let numbers = [];
let result = '';
let hexaChars = '';
let state = "a";

window.addEventListener('load', () => {
    simpleBtn.style.color = 'rgb(10,90,10)';
});

simpleBtn.addEventListener('click', () => {
    if (state === 'b')
        state = 'a';
    if (simpleBtn.style.color = 'rgb(0,0,0)')
        simpleBtn.style.color = 'rgb(10,90,10)';
    if (hexBtn.style.color = 'rgb(10,90,10')
        hexBtn.style.color = 'rgb(0,0,0)';
})

hexBtn.addEventListener('click', () => {
    if (state === 'a')
        state = 'b';
    if (simpleBtn.style.color = 'rgb(10,90,10)')
        simpleBtn.style.color = 'rgb(0,0,0)';
    if (hexBtn.style.color = 'rgb(10,90,10')
        hexBtn.style.color = 'rgb(10,90,10)';
})

clickmeBtn.addEventListener('click', () => {
    if (state === "a") {
        randomIndex = getRandomIndex();
        dataColor.innerHTML = colorArray[randomIndex];
        dataColor.style.color = colorArray[randomIndex];
        container.style.background = colorArray[randomIndex];
    }
    else if (state === "b") {
        numbers = [];
        for (let i = 0; i < 6; i++)
            numbers.push(getRandomNumber());
        hexaChars = numbers.map(num => {
            if (num > 9) return String.fromCharCode(num + 87);
            return num;
        });
        result = "#" + hexaChars.join('');
        dataColor.innerHTML = result;
        dataColor.style.color = result;
        container.style.background = result;
    }
    else
        console.log('error');
})

function getRandomIndex() {
    return Math.floor(Math.random() * 10);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 16);
}