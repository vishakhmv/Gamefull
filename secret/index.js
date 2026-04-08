window.addEventListener("load", () => {
  let a = new Audio("sounds/fooled.mpeg");
  a.play();
});

document
  .querySelector(".first-demo-home")
  .addEventListener("click", function () {
    let w = new Audio("../simon-master/sounds/wrong.mp3");
    w.play();
    document.querySelector("main").classList.add("wrong");
    setTimeout(function () {
      document.querySelector("main").classList.remove("wrong");
    }, 200);
    document.querySelector(".demo-home").style.display = "block";
    document.querySelector(".fooled-again").style.display = "block";
    document.querySelector(".second-div").style.display = "flex";
    document.querySelector(".hc-h2").style.display = "none";
    this.remove();
  });

document
  .querySelector(".second-demo-home")
  .addEventListener("click", function () {
    let w = new Audio("../simon-master/sounds/wrong.mp3");
    w.play();
    document.querySelector("main").classList.add("wrong");
    setTimeout(function () {
      document.querySelector("main").classList.remove("wrong");
    }, 200);
    document.querySelector(".second-div").remove();
    document.querySelector(".third-fooled").style.display = "block";
    document.querySelector(".task-div").style.display = "flex";

    this.remove();
  });

const headerHomeBtn = document.querySelector(".demo-home");
const instructionText = document.querySelector(".second-div > h2");
const secondBtnContainer = document.querySelector(".s-d-h-div");
const gitDiv2 = document.querySelector(".git-div-2");

headerHomeBtn.addEventListener("mouseenter", function () {
  let v = new Audio("sounds/home-btn.mpeg");
  v.play();
  this.classList.add("erase-animation");
  instructionText.innerText =
    "The button that redirects you to the home page is here.";

  secondBtnContainer.style.display = "flex";

  setTimeout(() => {
    this.style.display = "none";
  }, 200);
});

let isIdentityUnlocked = false;

document.querySelector(".git-btn").addEventListener("click", () => {
  isIdentityUnlocked = true;
});

const handleIdentityClick = () => {
  if (isIdentityUnlocked) {
    window.location.replace("../index.html");
  }
};
document
  .querySelector(".main_logo")
  .addEventListener("click", handleIdentityClick);
document.querySelector(".title").addEventListener("click", handleIdentityClick);

const quitBtn = document.getElementById("quitBtn");
const mainContainer = document.querySelector(".main-container");
const homeContainer = document.querySelector(".home-container");

const quitOverlay = document.getElementById("quit-overlay");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

quitBtn.addEventListener("click", () => {
  quitOverlay.style.display = "flex";
});

btnYes.addEventListener("click", () => {
  quitOverlay.style.display = "none";
  mainContainer.style.display = "none";
  homeContainer.style.display = "flex";
  gitDiv2.style.display = "block";
});

btnNo.addEventListener("click", () => {
  quitOverlay.style.display = "none";
});
// --- Math Prank Logic (Class Only) ---
const inputs = document.querySelectorAll(".math-in");
const texts = document.querySelectorAll(".q-txt");
const mathSubmit = document.querySelector(".btn-submit");
const mathMsg = document.querySelector(".math-msg");
const mathBox = document.querySelector(".math-box");
const revealBox = document.querySelector(".reveal-box");
const mainUI = document.querySelector("main");
const mysteryText = document.querySelector(".mystery-text");

let correctAnswers = 0,
  c = 5,
  ans1,
  ans2;

function generateQuestions() {
  let n1 = Math.floor(Math.random() * 90) + 10,
    n2 = Math.floor(Math.random() * 90) + 10;
  let n3 = Math.floor(Math.random() * 50) + 50,
    n4 = Math.floor(Math.random() * 40) + 10;

  ans1 = n1 + n2;
  ans2 = n3 - n4;

  texts[0].innerText = `${n1} + ${n2} = `;
  texts[1].innerText = `${n3} - ${n4} = `;
}

generateQuestions();
mysteryText.innerText = `Mystery count = ${c}`;

inputs[0].addEventListener("mousedown", (e) => {
  e.preventDefault();
  inputs[1].focus();
});
inputs[1].addEventListener("mousedown", (e) => {
  e.preventDefault();
  inputs[0].focus();
});

mathSubmit.addEventListener("click", () => {
  let u1 = Number(inputs[0].value),
    u2 = Number(inputs[1].value);

  if (u1 !== ans1 || u2 !== ans2) {
    mathMsg.innerText = "Wrong! Try again.";
    mathMsg.style.color = "#ff4757";
    mainUI.classList.add("wrong");
    setTimeout(() => mainUI.classList.remove("wrong"), 200);
    inputs[0].value = inputs[1].value = "";
  } else {
    correctAnswers++;
    c--;

    if (correctAnswers < 5) {
      mathMsg.innerText =
        "WRONG! Are you sure you're reading the numbers correctly? 😜";
      mathMsg.style.color = "#ff4757";
      mainUI.classList.add("wrong");
      setTimeout(() => mainUI.classList.remove("wrong"), 200);

      mysteryText.innerText = `Mystery count = ${c}`;
      generateQuestions();
      inputs[0].value = inputs[1].value = "";
    } else {
      mathBox.style.display = "none";
      revealBox.style.display = "flex";
      gitDiv2.style.display = "none";
    }
  }
});
