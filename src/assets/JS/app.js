// mani cards
const container = document.querySelector(".container");
const cards = container.querySelectorAll(".card");
// for (let i = 0; i < cards.length; i++) {
//   cards[i].onclick = function() {
//     container.classList.toggle("container_origin");
//   };
// }
cards.forEach(el => {
  el.onclick = () => container.classList.toggle("container_origin");
});
// hamburger-menu
const humbMenu = document.querySelector(".menu-btn");

humbMenu.onclick = e => {
  e.preventDefault();
  humbMenu.classList.toggle("menu-btn_active");
};
