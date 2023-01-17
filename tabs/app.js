const array = [
    {
        id: 1,
        name: "History",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim, quod culpa expedita quasi assumenda eligendi aspernatur officia nobis explicabo. Possimus, sed! Praesentium velit voluptas libero. Quis assumenda autem history!"
    },
    {
        id: 2,
        name: "Vision",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim, quod culpa expedita quasi assumenda eligendi aspernatur officia nobis explicabo. Possimus, sed! Praesentium velit voluptas libero. Quis assumenda autem vision!"
    },
    {
        id: 3,
        name: "Goals",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim, quod culpa expedita quasi assumenda eligendi aspernatur officia nobis explicabo. Possimus, sed! Praesentium velit voluptas libero. Quis assumenda autem goals!"
    }
];

const btnsPickContent = document.querySelectorAll('.content-picker-title');

const description = document.querySelector('[data-description]');

console.log(description.childNodes[1].innerHTML)

console.log(document.querySelectorAll('[data-description]'))

console.log(document.querySelectorAll('.content-picker-title'))

window.addEventListener('load', () => {
    btnsPickContent[0].classList.add('white-background');
    description.childNodes[1].textContent = array[0].name;
    description.childNodes[3].textContent = array[0].description;
});

btnsPickContent.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log(event.target)
        const clickedBtn = event.target;
        const allBtns = document.querySelectorAll('.content-picker-title');

        allBtns.forEach(btn => {
            console.log(btn.classList)
            if (btn !== clickedBtn && btn.classList.contains('white-background')) {
                btn.classList.remove('white-background');
            }
        });
        clickedBtn.classList.add('white-background');
        array.forEach(element => {
            if (clickedBtn.textContent === element.name) {
                //childNodes[0],childNodes[2],childNodes[4] zawierają pusty tekst,
                //ktory oddziela elementy html
                //childNodes[1] zawiera h3
                //childNodes[3] zawiera p
                description.childNodes[1].textContent = element.name;
                description.childNodes[3].textContent = element.description;
            }
        })

    });
});