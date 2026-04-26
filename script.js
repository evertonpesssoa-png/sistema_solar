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