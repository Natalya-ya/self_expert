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
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
