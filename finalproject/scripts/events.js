const eventsList = document.querySelector("#events");

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

const allButton = document.querySelector("#all");
const orchestraButton = document.querySelector("#orchestra");
const recitalButton = document.querySelector("#recital");
const communityButton = document.querySelector("#community");

let allEvents = [];

function setActiveButton(button) {
    allButton.classList.remove("active");
    orchestraButton.classList.remove("active");
    recitalButton.classList.remove("active");
    communityButton.classList.remove("active");

    button.classList.add("active");
}

async function getEvents() {
    const response = await fetch("data/events.json");
    const events = await response.json();

    allEvents = events;
    displayEvents(allEvents);
}

function displayEvents(events) {
    eventsList.innerHTML = "";

    events.forEach(event => {

        const card = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = event.name;

        const date = document.createElement("p");
        date.textContent = `${event.date} at ${event.time}`;

        const location = document.createElement("p");
        location.textContent = event.location;

        const description = document.createElement("p");
        description.textContent = event.description;

        const websiteParagraph = document.createElement("p");

        const websiteLink = document.createElement("a");
        websiteLink.href = event.website;
        websiteLink.textContent = "Website";
        websiteLink.target = "_blank";

        websiteParagraph.appendChild(websiteLink);

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(location);
        card.appendChild(description);
        card.appendChild(websiteParagraph);

        eventsList.appendChild(card);
    });
}

allButton.addEventListener("click", () => {
    displayEvents(allEvents);
    setActiveButton(allButton);
});

orchestraButton.addEventListener("click", () => {
    const filteredEvents = allEvents.filter(
        event => event.type === "orchestra"
    );

    displayEvents(filteredEvents);
    setActiveButton(orchestraButton);
});

recitalButton.addEventListener("click", () => {
    const filteredEvents = allEvents.filter(
        event => event.type === "recital"
    );

    displayEvents(filteredEvents);
    setActiveButton(recitalButton);
});

communityButton.addEventListener("click", () => {
    const filteredEvents = allEvents.filter(
        event => event.type === "community"
    );

    displayEvents(filteredEvents);
    setActiveButton(communityButton);
});

gridbutton.addEventListener("click", () => {
    eventsList.classList.add("grid");
    eventsList.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    eventsList.classList.add("list");
    eventsList.classList.remove("grid");
});

if (window.innerWidth >= 768) {
    eventsList.classList.add("grid");
    eventsList.classList.remove("list");
} else {
    eventsList.classList.add("list");
    eventsList.classList.remove("grid");
}

getEvents();
setActiveButton(allButton);
