import ScrollReveal from "scrollreveal";
import "../sass/style.scss";
import "virtual:svg-icons-register";

const isMobile = window.innerWidth < 768;

const sr = ScrollReveal({
  origin: "bottom",
  distance: isMobile ? "35px" : "100px",
  duration: isMobile ? 800 : 1000,
  delay: isMobile ? 250 : 200,
  reset: false,
  mobile: true,
});

sr.reveal(".header__top", { delay: isMobile ? 300 : 300, origin: "top" });
sr.reveal(".technology__title", { delay: isMobile ? 350 : 300, origin: "top" });
sr.reveal(".gallery__text", { delay: isMobile ? 350 : 300, origin: "top" });
sr.reveal(".animate-top", { delay: isMobile ? 250 : 200, origin: "top" });

sr.reveal(".header__content-box", { delay: isMobile ? 450 : 500 });
sr.reveal(".header__decor-text", { interval: isMobile ? 250 : 200 });
sr.reveal(".animate-i-b", {
  delay: isMobile ? 350 : 300,
  interval: isMobile ? 250 : 200,
});
sr.reveal(".info__specs", { delay: isMobile ? 300 : 200 });

sr.reveal(".animate-left", {
  delay: isMobile ? 400 : 400,
  interval: isMobile ? 250 : 200,
  origin: isMobile ? "bottom" : "left",
});

sr.reveal(".buy__img", {
  origin: isMobile ? "bottom" : "right",
  delay: isMobile ? 500 : 500,
});

sr.reveal(".animate-l-ni", {
  origin: isMobile ? "bottom" : "left",
  delay: isMobile ? 300 : 200,
});

sr.reveal(".animate-r-ni", {
  origin: isMobile ? "bottom" : "right",
  delay: isMobile ? 500 : 500,
});
