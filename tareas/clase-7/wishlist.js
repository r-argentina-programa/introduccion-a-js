const gifts = JSON.parse(localStorage.getItem("gifts"));

const $wishlist = document.querySelector("#wishlist");

$wishlist.textContent = gifts["gifts"];