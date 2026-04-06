// ===================== HEADER SCROLL =====================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// ===================== REVEAL (УЛУЧШЕННЫЙ) =====================
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));


// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ===================== HERO PARALLAX (🔥 НОВОЕ) =====================
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const offset = window.scrollY;

  if (hero) {
    hero.style.transform = `translateY(${offset * 0.3}px)`;
  }
});


// ===================== CURSOR EFFECT =====================
const cursor = document.createElement("div");

cursor.style.cssText = `
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0,255,204,0.5);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: transform 0.1s ease;
`;

document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


// ===================== CARD HOVER (УЛУЧШЕННЫЙ) =====================
document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${y * -10}deg)
      rotateY(${x * 10}deg)
      translateY(-5px)
      scale(1.03)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
});


// ===================== BUTTON INTERACTION =====================
document.querySelectorAll("button").forEach(btn => {

  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.boxShadow = `
      ${x * 0.05}px ${y * 0.05}px 30px rgba(0,255,204,0.3)
    `;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "";
  });
});


// ===================== SCROLL TO CONTACT =====================
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
