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

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function makeMove(cell) {
  const index = Array.from(cell.parentNode.children).indexOf(cell);

  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWin()) {
      document.getElementById("winner-message").textContent = currentPlayer + " wins!";
      gameOver = true;
    } else if (!board.includes("")) {
      document.getElementById("winner-message").textContent = "It’s a draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];
  return winPatterns.some(pattern => {
    const [a,b,c] = pattern;
    return board[a] && board[a] === board[b] && board[b] === board[c];
  });
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
  document.getElementById("winner-message").textContent = "";
}
