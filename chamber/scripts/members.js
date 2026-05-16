const url = "data/members.json";

const members = document.querySelector("#members");

// async function getProphetData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.table(data.prophets);
//     displayProphets(data.prophets);
// }

// getProphetData();

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data);
}

const displayMembers = (memberList) => {
    memberList.forEach((member) => {
        let card = document.createElement('article');

        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let membership = document.createElement('p');
        let description = document.createElement('p');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.textContent = `Website`;
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        image.setAttribute("src", `images/${member.image}`)
        image.setAttribute("alt", `${member.name} Logo`);
        image.setAttribute("loading", "lazy");
        description.textContent = member.description;

        membership.textContent = `Membership Level: ${member.membershipLevel}`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(description);

        members.appendChild(card);

    });
}

getMemberData();


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
