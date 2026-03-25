// ===================== SCROLL TO TOP ON LOAD =====================
window.addEventListener("DOMContentLoaded", () => {
  // принудительно вверх до инициализации Lenis
  window.scrollTo(0, 0);
});

// ===================== SCROLL TO CONTACT =====================
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// ===================== CARD HIGHLIGHT =====================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});

// ===================== PARALLAX HERO/SECTIONS =====================
const parallaxElements = document.querySelectorAll(".hero, section");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  parallaxElements.forEach((el) => {
    let speed = 0.1;
    el.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

// ===================== TYPING EFFECT =====================
const text = "Создаю сайты и цифровые продукты";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();

// ===================== REVEAL ON SCROLL =====================
const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight - 100;
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("active");
    }
  });
});

// ===================== MAGNETIC BUTTONS =====================
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
});

// ===================== 3D TILT CARDS =====================
cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

// ===================== SMOOTH SCROLL (LENIS) =====================
const lenis = new Lenis({ duration: 1.2, smooth: true });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ===================== NAVBAR SCROLL EFFECT =====================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});