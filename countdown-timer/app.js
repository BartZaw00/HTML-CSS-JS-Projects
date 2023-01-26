const countdownElement = document.querySelectorAll('.countdown');

// Tworzymy obiekt Date i ustawiamy czas końcowy
let deadline = new Date(2023, 3, 2, 18, 0, 0);

let actualDate = new Date();

let seconds = Math.floor((deadline - actualDate) / 1000);

let minutes = Math.floor(seconds / 60);

let hours = Math.floor(minutes / 60);

let days = Math.floor(hours / 24);


let interval = setInterval(() => {
    actualDate = new Date();
    seconds = Math.floor((deadline - actualDate) / 1000);
    minutes = Math.floor(seconds / 60) % 60;
    hours = Math.floor(seconds / 3600) % 24;
    days = Math.floor(seconds / 3600 / 24);

    // Jeśli czas minął, kończymy interwał
    if (Math.floor((deadline - actualDate) / 1000) <= 0) {
        clearInterval(interval);
    } else {
        countdownElement[0].firstElementChild.textContent = days;
        countdownElement[1].firstElementChild.textContent = hours;
        countdownElement[2].firstElementChild.textContent = minutes;
        countdownElement[3].firstElementChild.textContent = seconds % 60;
    }
}
    , 1000);