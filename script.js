// ======================
// ⭐ ESTRELAS (seu código)
// ======================
function createStars() {
  const container = document.body;

  for (let i = 0; i < 800; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 2;
    const duration = Math.random() * 5 + 2; // 2s a 7s
    const delay = Math.random() * 5;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    star.style.animationDuration = duration + "s";
    star.style.animationDelay = delay + "s";

    container.appendChild(star);
  }
}

createStars();


// ======================
// 🔍 ZOOM UNIVERSAL
// ======================
const viewport = document.querySelector('.viewport');

// 🔥 começa mais próximo automaticamente
let scale = window.innerWidth < 768 ? 2 : 1.5;

updateZoom();


// ======================
// 🖱️ SCROLL (PC)
// ======================
window.addEventListener('wheel', (e) => {
  e.preventDefault();

  scale -= e.deltaY * 0.001;

  clampZoom();
  updateZoom();
}, { passive: false });


// ======================
// 🤏 PINCH (MOBILE)
// ======================
let initialDistance = null;

viewport.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2) {
    initialDistance = getDistance(e.touches);
  }
});

viewport.addEventListener('touchmove', (e) => {
  if (e.touches.length === 2 && initialDistance) {
    const newDistance = getDistance(e.touches);

    const zoomFactor = newDistance / initialDistance;
    scale *= zoomFactor;

    initialDistance = newDistance;

    clampZoom();
    updateZoom();
  }
});

viewport.addEventListener('touchend', () => {
  initialDistance = null;
});


// ======================
// 🔧 FUNÇÕES
// ======================
function getDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

function clampZoom() {
  scale = Math.min(Math.max(0.5, scale), 4);
}

function updateZoom() {
  viewport.style.transform = `scale(${scale})`;
}