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

const links = document.querySelectorAll("header ul a");

function changeLinkState() {
  const index = sections.length;

  if (--index && window.scrollY + 50 < sections[index].scrollTop) {
  }
  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.remove("active");
}

changeLinkState();

window.addEventListener("scroll", changeLinkState);
