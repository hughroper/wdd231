const npDialog = document.querySelector("#membershipNpDetails");
document.querySelector("#openNP").addEventListener("click", () => {
    npDialog.showModal();
});
document.querySelector("#closeNP").addEventListener("click", () => {
    npDialog.close();
});


const bronzeDialog = document.querySelector("#membershipBronzeDetails");
document.querySelector("#openBronze").addEventListener("click", () => {
    bronzeDialog.showModal();
});
document.querySelector("#closeBronze").addEventListener("click", () => {
    bronzeDialog.close();
});


const silverDialog = document.querySelector("#membershipSilverDetails");
document.querySelector("#openSilver").addEventListener("click", () => {
    silverDialog.showModal();
});
document.querySelector("#closeSilver").addEventListener("click", () => {
    silverDialog.close();
});


const goldDialog = document.querySelector("#membershipGoldDetails");
document.querySelector("#openGold").addEventListener("click", () => {
    goldDialog.showModal();
});
document.querySelector("#closeGold").addEventListener("click", () => {
    goldDialog.close();
});

