const currentYear = document.querySelector("#currentYear");
const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;





const visitMessage = document.querySelector("#visited");

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysBetween = Math.floor((currentVisit - Number(lastVisit)) / 86400000);

    if (daysBetween < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);


