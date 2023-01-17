const countdownElement = document.querySelectorAll('.countdown');
console.log(countdownElement)

// Tworzymy obiekt Date i ustawiamy czas końcowy
let deadline = new Date("2023-02-18 20:00");

console.log(deadline)

let actualDate = new Date();

let timeLeftInSeconds = deadline.getSeconds() - actualDate.getSeconds();

let timeLeft = new Date(timeLeftInSeconds);

console.log()

// Ustawiamy interwał, który co sekundę aktualizuje pozostały czas
let interval = setInterval(() => {
    actualDate = new Date();
    timeLeftInSeconds = deadline - actualDate;
    timeLeft = new Date(timeLeftInSeconds);

    // Jeśli czas minął, kończymy interwał
    if (timeLeftInSeconds <= 0) {
        clearInterval(interval);
    } else {
        console.log(`Aktualna data: ${actualDate}.`);
        console.log(`Deadline data: ${deadline}.`);
        countdownElement[0].firstElementChild.textContent = timeLeft.getDate();
        countdownElement[1].firstElementChild.textContent = timeLeft.getHours();
        countdownElement[2].firstElementChild.textContent = timeLeft.getMinutes();
        countdownElement[3].firstElementChild.textContent = timeLeft.getSeconds();
    }
}, 1000);