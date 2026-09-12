/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (window.innerWidth > 900) {

  let mouseX = 0;
  let mouseY = 0;

  let followerX = 0;
  let followerY = 0;

  document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

  });


  function animateCursor() {

    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();


  const interactiveElements = document.querySelectorAll(
    "a, button, .project-visual, .circle-link"
  );

  interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
      follower.classList.add("active");
    });

    element.addEventListener("mouseleave", () => {
      follower.classList.remove("active");
    });

  });

}



/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuButton.addEventListener("click", () => {

  mobileMenu.classList.toggle("open");

});


mobileLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

  });

});



/* =========================================
   SCROLL REVEALS
========================================= */

const revealElements = document.querySelectorAll(
  ".intro-content, .project, .skills-content, .about-content, .contact-content"
);

revealElements.forEach((element) => {

  element.classList.add("reveal");

});


const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach((element) => {

  observer.observe(element);

});



/* =========================================
   PROJECT IMAGE PARALLAX
========================================= */

const projects = document.querySelectorAll(".project-visual");

window.addEventListener("scroll", () => {

  projects.forEach((project) => {

    const rect = project.getBoundingClientRect();

    const center = window.innerHeight / 2;

    const distance = rect.top + rect.height / 2 - center;

    const movement = distance * -0.015;

    project.style.backgroundPosition =
      `center ${movement}px`;

  });

});



/* =========================================
   SMOOTH ANCHOR
========================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

  anchor.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});