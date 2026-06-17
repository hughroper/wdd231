const form = document.querySelector("#waitListForm");
const dialog = document.querySelector("#confirmDialog");

const editButton = document.querySelector("#editButton");
const confirmButton = document.querySelector("#confirmButton");

document.querySelector("#timestamp").value =
    new Date().toLocaleString();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    document.querySelector("#confirmFirstName").textContent =
        document.querySelector("#firstname").value;

    document.querySelector("#confirmLastName").textContent =
        document.querySelector("#lastname").value;

    document.querySelector("#confirmEmail").textContent =
        document.querySelector("#email").value;

    document.querySelector("#confirmPhone").textContent =
        document.querySelector("#phone").value;

    document.querySelector("#confirmAge").textContent =
        document.querySelector("#age").value;

    document.querySelector("#confirmExperience").textContent =
        document.querySelector('input[name="experience"]:checked').value;

    document.querySelector("#confirmInterest").textContent =
        document.querySelector('input[name="interest"]:checked').value;

    document.querySelector("#confirmQuestions").textContent =
        document.querySelector("#question").value;

    dialog.showModal();
});

editButton.addEventListener("click", () => {
    dialog.close();
});

confirmButton.addEventListener("click", () => {
    form.submit();
});