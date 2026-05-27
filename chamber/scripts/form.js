const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo)

console.log(myInfo.get('firstname'));
console.log(myInfo.get('lastname'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('membership'));
console.log(myInfo.get('description'));

document.querySelector('#results').innerHTML = `<p>Contact: ${myInfo.get('firstname')} ${myInfo.get('lastname')}</p>
<p>Email: <a href="mailto:${myInfo.get('email')}">${myInfo.get('email')}</a></p>
<p>Phone: ${myInfo.get('phone')}</p>
<p>Organization: ${myInfo.get('organization')}</p>
<p>Level: ${myInfo.get('membership')}</p>
<p>Description: ${myInfo.get('description')}</p>`;
