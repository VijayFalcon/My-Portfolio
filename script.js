const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(theme) {
  if (theme === "dark") {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  }
}

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  setTheme(storedTheme);
} else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});

const certificateContainers = document.querySelectorAll(".certificate-container");
const fullscreenOverlays = document.querySelectorAll(".fullscreen-overlay");
const closeFullscreens = document.querySelectorAll(".close-fullscreen");

certificateContainers.forEach(container => {
  container.addEventListener("click", () => {
    const overlayId = container.dataset.overlayId;
    const overlay = document.getElementById(overlayId);
    overlay.style.display = "block";
  });
});

closeFullscreens.forEach(button => {
  button.addEventListener("click", () => {
    const overlayId = button.dataset.overlayId;
    const overlay = document.getElementById(overlayId);
    overlay.style.display = "none";
  });
});