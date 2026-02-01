const date = new Date("April 05, 2026 16:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = date - now;

  if (diff > 0) {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = m.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = s.toString().padStart(2, "0");
  }
}, 1000);


const petalContainer = document.querySelector(".petals");

for (let i = 0; i < 25; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 10 + Math.random() * 10 + "s";
  petal.style.animationDelay = Math.random() * 10 + "s";
  petal.style.opacity = Math.random();

  petalContainer.appendChild(petal);
}
