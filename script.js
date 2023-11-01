"use strict";
const sections = document.querySelectorAll("section");

const slideSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
};

const observer = new IntersectionObserver(slideSection, {
  root: null,
  threshold: 0.4,
});

sections.forEach((section) => {
  observer.observe(section);
  section.classList.add("hidden");
});

function moveSquare(squareDivClass, pathDivClass) {
  const rectPath = document.querySelector(`.${pathDivClass}`);
  const arrow = document.querySelector(`.${squareDivClass}`);
  // const height = Math.floor(rectPath.getBoundingClientRect().height);
  // const width = Math.floor(rectPath.getBoundingClientRect().width);
  let x = 0;
  let y = 0;

  setInterval(function () {
    const height = Math.floor(rectPath.getBoundingClientRect().height);
    const width = Math.floor(rectPath.getBoundingClientRect().width);

    if (x < width && y <= 0) {
      x++;
      arrow.style.left = `${x}px`;
    }
    if (x >= width && y < height) {
      y = y + 1;
      arrow.style.top = `${y}px`;
    }
    if (y >= height && x > 0) {
      x--;
      arrow.style.left = `${x}px`;
    }
    if (x <= 0 && y > 0) {
      y--;
      arrow.style.top = `${y}px`;
    }
  }, 10);
}

const autoText = document.querySelector(".auto-text");
const text = "Passionate";
let x = 1;
setInterval(() => {
  autoText.textContent = text.slice(0, x);

  if (x <= text.length) {
    x++;
  } else {
    x = 1;
  }
}, 300);

moveSquare("arrow-top", "square-top");
moveSquare("arrow-bottom", "square-bottom");

// observer2.observe(bg);
