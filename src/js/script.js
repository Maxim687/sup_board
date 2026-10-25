import ScrollReveal from "scrollreveal";
import "../sass/style.scss";
import "virtual:svg-icons-register";

const sr = ScrollReveal({
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  delay: 200,
  reset: false,
});

sr.reveal(".header__top", { delay: 300, origin: "top" });
sr.reveal(".technology__title", { delay: 300, origin: "top" });
sr.reveal(".gallery__text", { delay: 300, origin: "top" });
sr.reveal(".header__content-box", { delay: 500 });
sr.reveal(".header__decor-text", { interval: 200 });
sr.reveal(".animate-left", { delay: 400, interval: 200, origin: "left" });
sr.reveal(".animate-i-b", { delay: 300, interval: 200, origin: "bottom" });
sr.reveal(".info__specs", { origin: "bottom" });
sr.reveal(".animate-top", { origin: "top" });
sr.reveal(".buy__img", { origin: "right", delay: 500 });
sr.reveal(".animate-l-ni", { origin: "left" });
sr.reveal(".animate-r-ni", { origin: "right", delay: 500 });
