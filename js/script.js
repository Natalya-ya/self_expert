// FOOTER YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//NAVIGATION BTN
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
//ACCORDION BTN
// let btnAccordionEl = document.querySelector(".btn--down");
// let accordionDivEl = document.querySelector(".accordion-div");
// btnAccordionEl.addEventListener("click", function () {
//   accordionDivEl.classList.toggle("open");
// });
const icons = document.querySelectorAll(".btn--down");

for (let icon of icons) {
  const item = icon.parentElement;

  icon.addEventListener("click", function () {
    item.classList.toggle("open");
  });
}
const iconsUp = document.querySelectorAll(".btn--up");

for (let iconUp of iconsUp) {
  const itemUp = iconUp.parentElement;

  iconUp.addEventListener("click", function () {
    itemUp.classList.toggle("open");
  });
}
