// Hamburger menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

const MOBILE_WIDTH = 768; // adjust if needed

// Toggle menu
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});

// Close when clicking outside (MOBILE ONLY)
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= MOBILE_WIDTH &&
    navLinks.classList.contains("active") &&
    !nav.contains(e.target)
  ) {
    navLinks.classList.remove("active");
  }
});

// Close when clicking a link (mobile only)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= MOBILE_WIDTH) {
      navLinks.classList.remove("active");
    }
  });
});

// Safety: reset menu on resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > MOBILE_WIDTH) {
    navLinks.classList.remove("active");
  }
});

// Countdown
const date = new Date("April 05, 2026 00:00:00").getTime();
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

// Floating Petals
const petalContainer = document.querySelector(".petals");
for (let i = 0; i < 25; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 10 + Math.random() * 10 + "s";
  petal.style.animationDelay = Math.random() * 10 + "s";
  petal.style.opacity = 0.5 + Math.random() * 0.5;
  petalContainer.appendChild(petal);
}


// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const navHeight = nav.offsetHeight;
      window.scrollTo({
        top: targetSection.offsetTop - navHeight,
        behavior: 'smooth'
      });
    }
  });
});


// Auto-scroll gallery
const gallery = document.querySelector('.gallery1');
gallery.innerHTML += gallery.innerHTML;
let scrollPos = 0;
const scrollSpeed = 1;
let isPaused = false;
gallery.addEventListener('mouseenter', () => {
  isPaused = true;
});
gallery.addEventListener('mouseleave', () => {
  isPaused = false;
});

function autoScroll() {
  if (!isPaused) {
    scrollPos += scrollSpeed;
    if (scrollPos >= gallery.scrollWidth / 2) scrollPos = 0;
    gallery.scrollLeft = scrollPos;
  }
  requestAnimationFrame(autoScroll);
}
autoScroll();


const gallery2 = document.querySelector('.gallery2');
gallery2.innerHTML += gallery2.innerHTML; // duplicate for seamless scroll

let scrollPos2 = gallery2.scrollWidth / 2; // start from the "end" to scroll right
const scrollSpeed2 = 1; // adjust speed
let isPaused2 = false;

gallery2.addEventListener('mouseenter', () => {
  isPaused2 = true;
});
gallery2.addEventListener('mouseleave', () => {
  isPaused2 = false;
});

function autoScroll2() {
  if (!isPaused2) {
    scrollPos2--; // decrease to scroll right
    if (scrollPos2 <= 0) scrollPos2 = gallery2.scrollWidth / 2;
    gallery2.scrollLeft = scrollPos2;
  }
  requestAnimationFrame(autoScroll2);
}

autoScroll2();

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let isPlaying = false;
let heartbeatInterval;

// BPM
const BPM = 120;
const interval = (60 / BPM) * 1000;

function startHeartbeat() {
  if (heartbeatInterval) clearInterval(heartbeatInterval);
  heartbeatInterval = setInterval(() => {
    btn.style.transform = "scale(1.3)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, interval / 2);
  }, interval);
}

function stopHeartbeat() {
  clearInterval(heartbeatInterval);
  btn.style.transform = "scale(1)";
}

// ▶️ play music after first interaction
function initMusic() {
  music.play().then(() => {
    isPlaying = true;
    btn.textContent = "❚❚";
    startHeartbeat();
  }).catch(() => {
    // autoplay blocked (just in case)
  });

  document.removeEventListener("click", initMusic);
  document.removeEventListener("touchstart", initMusic);
}

document.addEventListener("click", initMusic);
document.addEventListener("touchstart", initMusic);

// Button toggle
btn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent double-trigger

  if (isPlaying) {
    music.pause();
    btn.textContent = "▶";
    stopHeartbeat();
  } else {
    music.play();
    btn.textContent = "❚❚";
    startHeartbeat();
  }
  isPlaying = !isPlaying;
});


const nav = document.querySelector('.nav');
document.documentElement.style.setProperty(
  '--nav-height',
  nav.offsetHeight + 'px'
);

window.addEventListener('resize', () => {
  document.documentElement.style.setProperty(
    '--nav-height',
    nav.offsetHeight + 'px'
  );
});

if (sessionStorage.getItem("envelopeOpened") !== "true") {
  window.location.href = "../index.html";
}

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => observer.observe(section));




function updateSectionPadding() {
  const navHeight = nav.offsetHeight;
  sections.forEach(section => {
    section.style.paddingTop = navHeight + "px";
  });
}

// Initial call
updateSectionPadding();

// Update on resize
window.addEventListener('resize', updateSectionPadding);