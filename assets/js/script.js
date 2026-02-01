const envelope = document.getElementById("envelope");
const flower = document.querySelector(".flower");
const names = document.querySelector(".names");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");      // flap opens
  flower.classList.add("hide-flower"); // hide flower

  // Names appear after 1s (flap animation delay)
  setTimeout(() => {
    names.style.opacity = "1";
    names.style.transform = "translate(-50%, -50%)";
  }, 1000);

  // Redirect after 3 seconds
  setTimeout(() => {
    window.location.href = "invitation/index.html";
  }, 2500);
});