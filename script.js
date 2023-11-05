"use strict";
const sections = document.querySelectorAll("section");

const slideup = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove("hidden");
  }
};

const observer = new IntersectionObserver(slideup, {
  root: null,
  threshold: 0.1,
});

sections.forEach((el) => {
  observer.observe(el);
  el.classList.add("hidden");
});

const humburger = document.querySelector(".humburger");
const close = document.querySelector(".close");

const header = document.querySelector(".header");

humburger.addEventListener("click", function () {
  header.classList.add("active-menu");
});

close.addEventListener("click", function () {
  header.classList.remove("active-menu");
});

document.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("humburger") &&
    !e.target.classList.contains("nav-links")
  ) {
    header.classList.remove("active-menu");
  }
});

const navLinks = document.querySelectorAll("header ul a");
function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  if (window.scrollY + 50 > sections[index].offsetTop) {
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }
  if (window.scrollY + 50 < sections[index].offsetTop) {
    navLinks.forEach((link) => link.classList.remove("active"));
  }
}

changeLinkState();

window.addEventListener("scroll", changeLinkState);
