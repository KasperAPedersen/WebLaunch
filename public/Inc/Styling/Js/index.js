let container = document.getElementsByClassName("item")[0].children[1];

document.addEventListener("DOMContentLoaded", () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

let updateCountdown = () => {
    let dueDate = new Date("Dec 1, 2024 00:00:00").getTime();
    let currentDate = new Date().getTime();

    let dateDifference = dueDate - currentDate;

    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    let hours =  Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);
    container.innerHTML = `
        <p><span>${days}</span><br>Dage</p>
        <p><span>${hours}</span><br>Timer</p>
        <p><span>${minutes}</span><br>Minutter</p>
        <p><span>${seconds}</span><br>Sekunder</p>`;
};