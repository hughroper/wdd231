const spotlightContainer = document.querySelector('#members');
const spotlightURL = 'data/members.json';

async function getMembers() {
    const response = await fetch(spotlightURL);
    const data = await response.json();

    const qualifiedMembers = data.filter(member =>
        member.membershipLevel === 2 ||
        member.membershipLevel === 3
    );

    qualifiedMembers.sort(() => Math.random() - 0.5);

    const selectedMembers = qualifiedMembers.slice(0, 3);

    displaySpotlights(selectedMembers);
}

getMembers();

const displaySpotlights = (memberList) => {
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
        image.setAttribute("src", `images/${member.image}`);
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

        spotlightContainer.appendChild(card);
    });
}