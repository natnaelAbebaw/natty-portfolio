const sections = document.querySelectorAll("section");

const slideSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
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
