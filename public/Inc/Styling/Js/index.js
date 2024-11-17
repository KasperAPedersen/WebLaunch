let container = document.getElementsByClassName("item")[0].children[1];

document.addEventListener("DOMContentLoaded", () => {
    let dueDate = new Date("Dec 1, 2024 00:00:00").getTime();
    setInterval(() => {
        let currentDate = new Date().getTime();

        let dateDifference = dueDate - currentDate;

        let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
        let hours =  Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);
        console.log(days);
        container.innerHTML = `
    <p><span>${days}</span><br>Days</p>
    <p><span>${hours}</span><br>Hours</p>
    <p><span>${minutes}</span><br>Minutes</p>
    <p><span>${seconds}</span><br>Seconds</p>`;
    }, 1000);
});