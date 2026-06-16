const eventsList = document.querySelector("#events");

async function getEvents() {
    const response = await fetch("data/events.json");
    const events = await response.json();

    displayEvents(events);
}

function displayEvents(events) {
    events.forEach(event => {

        const title = document.createElement("li");
        title.textContent = event.name;

        const detailsWrapper = document.createElement("li");

        const details = document.createElement("ul");

        const date = document.createElement("li");
        date.textContent = `${event.date} at ${event.time}`;

        const location = document.createElement("li");
        location.textContent = event.location;

        const description = document.createElement("li");
        description.textContent = event.description;

        details.append(date, location, description);

        if (event.website) {
            const websiteItem = document.createElement("li");

            const websiteLink = document.createElement("a");
            websiteLink.href = event.website;
            websiteLink.textContent = event.website;
            websiteLink.target = "_blank";

            websiteItem.textContent = "Website: ";
            websiteItem.appendChild(websiteLink);

            details.appendChild(websiteItem);
        }

        detailsWrapper.appendChild(details);

        eventsList.append(title, detailsWrapper);
    });
}

getEvents();