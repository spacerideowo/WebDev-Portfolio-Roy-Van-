/* script.js */

function toggleText() {
  const para = document.getElementById("hiddenText");
  const button = document.querySelector("button");

  if (para.style.display === "none") {
    para.style.display = "block";
    button.textContent = "Hide Message";
  } else {
    para.style.display = "none";
    button.textContent = "Show Message";
  }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// click image to zoom in
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".project-image");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });
});

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function toggleGoal() {
  const goal = document.getElementById("myGoal");
  const btn = document.getElementById("goalBtn");

  if (goal.style.display === "none") {
    goal.style.display = "block";
    btn.textContent = "Hide My Favorite Goal";
  } else {
    goal.style.display = "none";
    btn.textContent = "Reveal My Favorite Goal";
  }
}
