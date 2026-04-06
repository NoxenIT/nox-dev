/* ===================== GLOBAL ===================== */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  color: white;
  overflow-x: hidden;

  -webkit-font-smoothing: antialiased;

  background:
    radial-gradient(circle at 20% 20%, rgba(0,255,204,0.08), transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(0,102,255,0.08), transparent 40%),
    #0a0a0a;
}

/* мягкий свет */
body::before {
  content: "";
  position: fixed;
  width: 900px;
  height: 900px;

  background: radial-gradient(circle, rgba(0,255,204,0.12), transparent 60%);
  filter: blur(120px);

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  pointer-events: none;
  animation: glowMove 12s infinite alternate ease-in-out;
}

@keyframes glowMove {
  0% { transform: translate(-40%, -60%) scale(1); }
  100% { transform: translate(-60%, -40%) scale(1.2); }
}

/* ===================== HEADER ===================== */
header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;

  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(12px);

  transition: all 0.4s ease;
  z-index: 1000;
}

header.scrolled {
  background: rgba(0,0,0,0.85);
  padding: 12px;
}

nav {
  display: flex;
  align-items: center;
}

nav a {
  margin: 0 15px;
  color: #aaa;
  text-decoration: none;
  position: relative;
  font-size: 15px;
}

/* underline */
nav a::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background: #00ffcc;
  transition: 0.3s;
}

nav a:hover::after {
  width: 100%;
}

/* ===================== SECTIONS ===================== */
section {
  padding: 140px 10%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}

/* линия */
section::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 1px;

  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
}

/* ===================== HERO ===================== */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title {
  font-size: 64px;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -1px;

  background: linear-gradient(90deg, #ffffff, #00ffcc 60%, #0066ff);
  -webkit-background-clip: text;
  color: transparent;

  text-shadow: 0 0 30px rgba(0,255,204,0.2);
}

.subtitle {
  margin-top: 20px;
  color: #aaa;
}

.limit {
  margin-top: 10px;
  color: #888;
}

/* ===================== BUTTON ===================== */
button, .tg-btn {
  margin-top: 25px;
  padding: 14px 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  background: linear-gradient(135deg, #00ffcc, #0066ff);
  color: black;

  font-weight: 600;
  text-decoration: none;

  transition: all 0.3s ease;
}

button:hover, .tg-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0,255,204,0.4);
}

/* ===================== TRUST ===================== */
.trust {
  text-align: center;
  color: #aaa;
  font-size: 18px;
}

/* ===================== CARDS ===================== */
.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  position: relative;
  flex: 1;
  min-width: 250px;

  padding: 30px;
  border-radius: 24px;

  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(20px);

  border: 1px solid rgba(255,255,255,0.06);

  transition: all 0.4s ease;
}

/* hover */
.card:hover {
  transform: translateY(-6px);

  border: 1px solid rgba(0,255,204,0.25);

  box-shadow:
    0 10px 40px rgba(0,0,0,0.5),
    0 0 20px rgba(0,255,204,0.1);
}

/* glow overlay */
.card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 24px;

  background: linear-gradient(
    120deg,
    transparent,
    rgba(0,255,204,0.08),
    transparent
  );

  opacity: 0;
  transition: 0.3s;
}

.card:hover::after {
  opacity: 1;
}

/* ===================== BADGES ===================== */
.badge {
  position: absolute;
  top: 15px;
  right: 15px;

  font-size: 11px;
  padding: 4px 10px;
  border-radius: 20px;

  background: rgba(255,255,255,0.08);
  color: #ccc;

  border: 1px solid rgba(255,255,255,0.12);
}

.badge.hit {
  background: rgba(0,255,204,0.12);
  color: #00ffcc;
}

.badge.pro {
  background: gold;
  color: black;
}

.popular {
  transform: scale(1.05);
  border: 1px solid rgba(0,255,204,0.4);
}

/* ===================== PROCESS ===================== */
.steps {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.step {
  flex: 1;
  min-width: 150px;
  padding: 25px;

  border-radius: 18px;
  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(255,255,255,0.06);

  transition: 0.3s;
}

.step:hover {
  transform: translateY(-5px);
}

.step span {
  font-size: 26px;
  color: #00ffcc;
  font-weight: 700;
}

/* ===================== REVIEWS ===================== */
.reviews {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.review {
  flex: 1;
  min-width: 250px;

  padding: 25px;
  border-radius: 20px;

  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);

  position: relative;
  transition: 0.3s;
}

.review:hover {
  transform: translateY(-5px);
}

/* кавычка */
.review::before {
  content: "“";
  position: absolute;
  top: 10px;
  left: 15px;

  font-size: 40px;
  color: rgba(0,255,204,0.2);
}

.review span {
  display: block;
  margin-top: 15px;
  font-size: 14px;
  color: #888;
}

/* ===================== CTA ===================== */
.cta {
  text-align: center;
}

/* ===================== TEXT ===================== */
h2 {
  font-size: 36px;
  font-weight: 800;

  background: linear-gradient(90deg, #fff, #00ffcc);
  -webkit-background-clip: text;
  color: transparent;
}

.accent {
  color: #00ffcc;
}

.soft {
  color: #aaa;
}

.small {
  font-size: 14px;
}

/* ===================== REVEAL ===================== */
.reveal {
  opacity: 0;
  transform: translateY(80px) scale(0.95);
  transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* ===================== SCROLL ===================== */
html {
  scroll-behavior: smooth;
}
