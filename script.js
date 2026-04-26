// ⭐ estrelas
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


// 🌌 exploração
const containerEl = document.querySelector('.container');

let scale = 1;
let pos = { x: 0, y: 0 };
let isDragging = false;
let start = { x: 0, y: 0 };

// zoom
window.addEventListener('wheel', (e) => {
  e.preventDefault();

  const zoomSpeed = 0.001;
  scale -= e.deltaY * zoomSpeed;

  scale = Math.min(Math.max(0.5, scale), 3);

  updateTransform();
}, { passive: false });

// drag
window.addEventListener('mousedown', (e) => {
  isDragging = true;
  start.x = e.clientX - pos.x;
  start.y = e.clientY - pos.y;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  pos.x = e.clientX - start.x;
  pos.y = e.clientY - start.y;

  updateTransform();
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

function updateTransform() {
  containerEl.style.transform =
    `translate(${pos.x}px, ${pos.y}px) scale(${scale})`;
}