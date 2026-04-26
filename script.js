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