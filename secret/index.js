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
    document.querySelector(".second-div h2").remove();

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
    "The button that redirects you to the home page is here";

  secondBtnContainer.style.display = "flex";

  setTimeout(() => {
    this.style.display = "none";
  }, 200);
});
