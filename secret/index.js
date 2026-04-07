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
});

btnNo.addEventListener("click", () => {
  quitOverlay.style.display = "none";
});
