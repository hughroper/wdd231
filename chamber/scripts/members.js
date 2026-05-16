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
        let card = document.createElement('section');

        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let membership = document.createElement('p');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.textContent = member.website;
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        image.setAttribute("src", `images/${member.image}`)
        image.setAttribute("alt", `${member.name} Logo`);
        image.setAttribute("loading", "lazy");

        membership.textContent = `Membership Level: ${member.membershipLevel}`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);
        card.appendChild(membership);

        members.appendChild(card);

    });
}

getMemberData();


