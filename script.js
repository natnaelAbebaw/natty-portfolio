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

const worksList = [
  {
    img: "./images/3.png",
    title: "Roomy-booking app",
    type: "web development",
    catagory: "fullstack",
    github: "https://github.com/natnaelAbebaw/Roomy-guest",
    liveLink: "https://roomy-guest.vercel.app/",
    text: `Roomy is a modern hotel booking app designed to simplify travel planning. It allows users to browse and book accommodations with ease, offering detailed property listings, flexible reservation options, and secure payment methods. Roomy combines user-friendly features with a seamless experience, making it the go-to platform for travelers seeking comfort and convenience.`,
  },
  {
    img: "./images/5.png",
    title: "Roomy-Dashboard",
    type: "web development",
    catagory: "fullstack",
    github: "https://github.com/natnaelAbebaw/Roomy-Dashboard",
    liveLink:
      "https://roomy-dashboard-2is305y86-natnael-abebaws-projects.vercel.app/",
    text: `Roomy-Dashboard is the admin interface for the Roomy hotel booking platform, offering hotel owners and administrators comprehensive tools to manage their properties effectively. It features robust property management capabilities, including the ability to add, edit, and organize room details such as photos, descriptions, pricing, and room arrangements. The dashboard provides real-time booking overviews, payment tracking, and performance analytics to monitor occupancy rates, revenue, and guest trends. With its intuitive design, Roomy-Dashboard simplifies operations, enabling seamless room arrangement and efficient management for enhanced guest satisfaction.`,
  },
  {
    img: "./images/4.png",
    title: "Sound wave",
    type: "web development",
    catagory: "front-end",
    github: "https://github.com/natnaelAbebaw/SoundWaves",
    liveLink:
      "https://sound-waves-84fa5763o-natnael-abebaws-projects.vercel.app/",
    text: `Sound Wave is a modern music player designed for an immersive listening experience. With sleek design and smooth functionality, it enables seamless playback, playlist management, and user-friendly controls for music enthusiasts.`,
  },
  {
    img: "./images/2.png",
    title: "Note book",
    type: "web development",
    catagory: "front-end",
    github: " https://github.com/natnaelAbebaw/Note-taking-app",
    liveLink: "https://note-taking-app-silk-one.vercel.app/",
    text: `Elevate your note-taking game with my React Notebook App. Seamlessly group notes into notebooks for easy organization. Effortlessly search through your notes, finding what you need in an instant. Mark favorites for quick access to your most important thoughts. This app, built with React, combines functionality and simplicity for an enhanced note-taking experience.`,
  },
  {
    img: "./images/1.png",
    title: "Web-snake",
    type: "web development",
    catagory: "front-end",
    github: "natnaelAbebaw",
    liveLink: "https://web-snake.netlify.app/",
    text: `Dive into nostalgia with my web-based Snake Game! Crafted solely with HTML, CSS, and JavaScript—no frameworks involved. Enjoy sleek, responsive design, intuitive controls, and dynamic gameplay as you slither through a visually pleasing environment. Challenge your friends, track high scores, and experience timeless fun in this minimalist, yet engaging, creation. Explore the beauty of simplicity in web development with this classic Snake Game.`,
  },
];

let workTypeState = "";
const worksBox = document.querySelector(".works-box");

const workBtns = document.querySelectorAll(".work-btn");

workBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    workTypeState = id;
    workBtns.forEach((el) => el.classList.remove("btn-underline-active"));
    e.target.classList.add("btn-underline-active");
    render();
  })
);

function renderworks(works) {
  let html = "";

  works.forEach((work) => {
    if (workTypeState && work.catagory !== workTypeState) return "";
    html += `
      <li class="work">
        <div class="work-img">
          <img
            src=${work.img}
            alt="project image"
          />
        </div>
    
        <div class="work-content">
          <div>
            <h3>${work.title}</h3>
            <span>${work.type}</span>
          </div>
          <p>
          ${work.text}
          </p>
        </div>
        <div class="work-btns-box">
             <a href="${work.github}" class="btn btn--fill"> Source code </a>
             <a href="${work.liveLink}" class="btn btn--fill"> See Live </a>
        </div>
      </li>
    `;
  });

  return html;
}

const Works = document.createElement("div");
Works.classList.add("works");

function render() {
  Works.innerHTML = renderworks(worksList);
  worksBox.appendChild(Works);
}

render();
