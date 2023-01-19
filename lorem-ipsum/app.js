const text = [
    `The sun was just starting to rise over the mountains as we set out 
    on our hike. The air was crisp and cool, and the birds were singing 
    in the trees. We walked for hours, taking in the beautiful scenery 
    and enjoying the peace and quiet of the wilderness.`,
    `The city was bustling with energy as we walked down the street. 
    People of all ages and backgrounds were out and about, going about 
    their daily business. We stopped to admire the architecture 
    and listen to the street musicians. It was truly a vibrant 
    and diverse community.`,
    `The beach was crowded with people enjoying the warm summer weather. 
    Children were playing in the sand, adults were sunbathing, 
    and the sound of waves crashing against the shore was a constant 
    background noise. We swam in the ocean and then lounged on the beach,
    soaking up the sun and the atmosphere.`,
    `The forest was dense and dark, and the only light came from the small 
    flashlight we carried with us. We walked cautiously, listening for any 
    sounds of animals or other movement. We saw deer, a fox, and a family 
    of raccoons along the way. It was an exhilarating and slightly eerie 
    experience.`,
    `The museum was full of interesting artifacts and exhibits. 
    We wandered through the galleries, taking our time to read the labels 
    and learn about the history and culture of the objects on display. 
    We saw ancient pottery, medieval weapons, and contemporary art. 
    It was a fascinating glimpse into the past and the present.`,
    `The concert was packed with fans of all ages, eagerly waiting for 
    the band to take the stage. When they finally did, the energy in 
    the room was electric. They played their most popular songs 
    and the crowd sang and danced along. It was a memorable night 
    of music and entertainment.`,
    `The park was a peaceful oasis in the middle of the city. We sat on 
    a bench and watched the ducks swimming in the pond, and the children 
    playing on the playground. The sun was shining, and it was a perfect 
    day to relax and enjoy nature.`,
    `The store was bustling with customers, all looking for the perfect 
    item. We browsed through the racks, trying on clothes and accessories. 
    We found a few things we liked and made our purchases. It was a fun 
    and successful shopping trip.`,
    `The restaurant was cozy and intimate, with dim lighting and soft 
    music playing in the background. We ordered our food and sat back 
    to enjoy the ambiance. The food was delicious, and we savored every 
    bite. It was a perfect night out for a romantic dinner.`,
    `The train ride was long, but the scenery was beautiful. We passed 
    through rolling hills, lush forests, and picturesque towns. 
    We chatted with our fellow passengers and watched the world go by. 
    It was a relaxing and enjoyable way to travel.`
];

const form = document.querySelector('[data-form]');
const amount = document.querySelector('#amount');
const article = document.querySelector('[data-article]');

let random;
let tempText;

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default behaviour of form element
    random = Math.floor(Math.random() * text.length);
    console.log('works');
    // ALL THE INPUTS IN HTML RETURN A STRING !!!
    console.log(amount.value); // string - black color
    console.log(Number(amount.value)); // number - blue color
    console.log(typeof Number(amount.value));
    // Sposoby na zamianę stringa na liczbę:
    // Number(), parseInt(), parseFloat(), + czyli -> num = +str

    article.innerHTML = ``;

    if (amount.value.length === 0 || amount.value <= 0 || amount.value > 9) {
        article.innerHTML = `<p class="lorem-text">${text[random]}</p>`;
    }
    else {
        tempText = text.slice(0, amount.value);
        tempText = tempText.map((item) => {
            return `<p class="lorem-text">${item}</p>`;
        }).join("");
        article.innerHTML = tempText;
    }
});

