document
  .querySelector(".first-demo-home")
  .addEventListener("click", function () {
    var w = new Audio("../simon-master/sounds/wrong.mp3");
    w.play();
    document.querySelector("main").classList.add("wrong");
    setTimeout(function () {
      document.querySelector("main").classList.remove("wrong");
    }, 200);

    this.remove();
  });
