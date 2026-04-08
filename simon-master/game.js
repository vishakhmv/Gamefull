alert(
  "You were fooled😂. You requested Tic-Tac-Goo, but navigated to Simon Master.",
);
gamePattern = [];
buttonColours = ["red", "blue", "green", "yellow", "purple", "orange"];
userClickedPattern = [];
var start = false;
var level = 0;
var highScore = 0;
const prankMap = {
  green: "lime",
  red: "brown",
  purple: "teal",
  yellow: "pink",
  blue: "cyan",
  orange: "grey",
};

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * buttonColours.length);
  var randomChosenColour = buttonColours[randomNumber];
  if (level > 2) {
    applyPrankColors();
  }
  gamePattern.push(randomChosenColour);
  shuffleButtons();
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  var a = new Audio("sounds/" + randomChosenColour + ".mp3");
  a.play();
  level = level + 1;
  $("h1").text("Level " + level);
}

$(document).on("click", ".btn", function () {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function playSound(name) {
  var a = new Audio("sounds/" + name + ".mp3");
  a.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(document).keypress(function (event) {
  if (!start) {
    start = true;
    $(".start").text("Started").prop("disabled", true);
    nextSequence();
  }
});

$(document).on("click", ".start", function () {
  if (!start) {
    start = true;
    $(".start").text("Started").prop("disabled", true);
    nextSequence();
  }
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      if (level > highScore) {
        highScore = level;
        $("#highscore").text("High Score: " + highScore);
      }
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    var w = new Audio("sounds/wrong.mp3");
    w.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text(
      "Game over. You lost at level  " + level + " Press any key to restart",
    );
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  start = false;
  $(".start").text("Start").prop("disabled", false);
  resetColors();
}

function shuffleButtons() {
  let container = $(".container");

  let buttons = container.find(".btn").toArray();

  for (let i = buttons.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
  }

  container.empty();

  let row1 = $('<div class="row"></div>');
  let row2 = $('<div class="row"></div>');

  buttons.forEach((button, index) => {
    if (index < 3) {
      row1.append(button);
    } else {
      row2.append(button);
    }
  });

  container.append(row1);
  container.append(row2);
}

function applyPrankColors() {
  $(".btn").each(function () {
    let id = this.id;
    $(this).removeClass("red blue green yellow purple orange");
    $(this).addClass(prankMap[id]);
  });
}

function resetColors() {
  $(".btn").each(function () {
    let id = this.id;
    $(this).removeClass("brown cyan pink lime teal grey");
    $(this).addClass(id);
  });
}
