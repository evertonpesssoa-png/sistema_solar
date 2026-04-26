function createStars() {
  const container = document.body;

  for (let i = 0; i < 800; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 2;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.opacity = Math.random();

    container.appendChild(star);
  }
}

createStars();


// 🔥 opcional: randomizar posição inicial dos planetas
const planets = document.querySelectorAll(
  ".mercury, .venus, .earth, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto"
);

planets.forEach(p => {
  const delay = Math.random() * 100;
  p.style.animationDelay = `-${delay}s`;
});