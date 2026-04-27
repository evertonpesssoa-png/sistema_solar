// ======================
// ⭐ ESTRELAS
// ======================
function createStars() {
  const container = document.body;

  for (let i = 0; i < 800; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 2;
    const duration = Math.random() * 5 + 2;
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

let scale = window.innerWidth < 768 ? 2 : 1.5;

updateZoom();

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
// 🔧 FUNÇÕES ZOOM
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


// ======================
// 🎮 BOTÕES DA UI
// ======================
function zoomIn() {
  scale += 0.2;
  clampZoom();
  updateZoom();
}

function zoomOut() {
  scale -= 0.2;
  clampZoom();
  updateZoom();
}

function resetView() {
  scale = window.innerWidth < 768 ? 2 : 1.5;
  updateZoom();
}


// ======================
// 📊 INFO DOS PLANETAS
// ======================
const planetData = {
  mercury: "O menor planeta e mais próximo do Sol.",
  venus: "Muito quente, com atmosfera densa e tóxica.",
  earth: "Nosso lar 🌍 cheio de vida.",
  mars: "O planeta vermelho, foco de exploração.",
  jupiter: "O maior planeta do sistema solar.",
  saturn: "Famoso por seus anéis incríveis.",
  uranus: "Gira de lado, bem diferente.",
  neptune: "Muito frio e distante.",
  pluto: "Planeta anão na borda do sistema."
};


// ======================
// 🪐 INTERAÇÃO PLANETAS
// ======================
document.querySelectorAll(
  '.mercury, .venus, .earth, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto'
).forEach(el => {

  el.style.cursor = "pointer";

  el.addEventListener('click', () => {
    const name = el.classList[0];

    document.getElementById('planetName').innerText = name.toUpperCase();
    document.getElementById('planetInfo').innerText = planetData[name];
  });

});