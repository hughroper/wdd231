const params = new URLSearchParams(window.location.search);

document.querySelector("#results").innerHTML = `
<h2>Thank You for Joining the Wait List!</h2>

<p><strong>Name:</strong>
${params.get("firstname")} ${params.get("lastname")}</p>

<p><strong>Email:</strong>
<a href="mailto:${params.get("email")}">${params.get("email")}</a></p>

<p><strong>Phone:</strong>
${params.get("phone")}</p>

<p><strong>Age:</strong>
${params.get("age")}</p>

<p><strong>Experience:</strong>
${params.get("experience")}</p>

<p><strong>Interest:</strong>
${params.get("interest")}</p>

<p><strong>Questions:</strong>
${params.get("question") || "None provided"}</p>

<p><strong>Submitted:</strong>
${params.get("timestamp")}</p>
`;