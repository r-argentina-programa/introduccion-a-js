const user = JSON.parse(localStorage.getItem("user"));

const $wishlist = document.querySelector("#wishlist");

$wishlist.textContent = user["gift-description"];