import { places } from "../data/places.mjs";

// console.log(places);

const cards = document.querySelector("#cards");

places.forEach(place => {
    const card = document.createElement("div");

    const name = document.createElement("h2");
    name.textContent = place.name;

    const figure = document.createElement("figure");

    const image = document.createElement("img");
    image.src = `images/${place.image}`;
    image.alt = place.name;
    image.loading = "lazy";
    image.width = 300;
    image.height = 200;

    figure.appendChild(image);

    const address = document.createElement("address");
    address.textContent = place.address;

    const description = document.createElement("p");
    description.textContent = place.description;



    const button = document.createElement("button");

    button.textContent = "Learn More";

    button.addEventListener("click", () => {

        window.open(place.url, "_blank");

    });

    card.append(figure, name, address, description, button);
    cards.appendChild(card);
});