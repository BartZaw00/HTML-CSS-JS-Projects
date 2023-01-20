array = [
    {
        id: 1,
        src: 'images/photo1.jpg'
    },
    {
        id: 2,
        src: 'images/photo2.jpg'
    },
    {
        id: 3,
        src: 'images/photo3.jpg'
    },
    {
        id: 4,
        src: 'images/photo4.jpg'
    },
    {
        id: 5,
        src: 'images/photo5.jpg'
    },
    {
        id: 6,
        src: 'images/photo6.jpg'
    },
    {
        id: 7,
        src: 'images/photo7.jpg'
    },
    {
        id: 8,
        src: 'images/photo8.jpg'
    },
    {
        id: 9,
        src: 'images/photo9.jpg'
    },
    {
        id: 10,
        src: 'images/photo10.jpg'
    },
]

const image = document.querySelector('[data-image]');
const photoNumber = document.querySelector('[data-number]');
const btnPrev = document.querySelector('[data-prev-button]');
const btnNext = document.querySelector('[data-next-button]');

let index = 0;

btnNext.addEventListener('click', () => {
    index++;
    if (index === 1) btnPrev.classList.remove('display-none');
    if (index === 9) btnNext.classList.add('display-none');
    image.style.backgroundImage = `url('${array[index].src}')`;
});

btnPrev.addEventListener('click', () => {
    index--;
    if (index === 0) btnPrev.classList.add('display-none');
    if (index === 8) btnNext.classList.remove('display-none');
    image.style.backgroundImage = `url('${array[index].src}')`;
});

// -- REFACTOR --

// function updateImage() {
//     image.style.backgroundImage = `url('${array[index].src}')`;
//     btnPrev.classList.toggle('display-none', index === 0);
//     btnNext.classList.toggle('display-none', index === array.length - 1);
// }

// btnNext.addEventListener('click', () => {
//     index++;
//     updateImage();
// });

// btnPrev.addEventListener('click', () => {
//     index--;
//     updateImage();
// });