let gamePattern = [];
const buttonDrums = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "kick-bass","tambourine","crash","open","closed"];
let validKeys=["w","a","s","d","f","g","h","j","k","l"]
let userClickedPattern = [];
let start = false;
let level = 0;
let highScore = 0;
let seconds = 0;
let timerInterval;


function nextSequence(){
    userClickedPattern=[];
    var randomNumber = Math.floor((Math.random()*buttonDrums.length));
    var randomChosenDrum=buttonDrums[randomNumber];
    gamePattern.push(randomChosenDrum);
    shuffleButtons(); 
    $("#"+randomChosenDrum).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var a = new Audio("sounds/"+randomChosenDrum+".mp3");
    a.play();
    level=level+1;
    $(".level").text("Level : "+level);
}

$(document).on("click", ".drum", function(){
    if(start)
    {
        var userChosenDrum = this.id;
        userClickedPattern.push(userChosenDrum);
        checkAnswer(userClickedPattern.length-1);
        playSound(userChosenDrum);
        animatePress(userChosenDrum);
    }
});

function playSound(name){
        var a = new Audio("sounds/"+name+".mp3");
        a.play();
}

function animatePress(currentDrum){
    $("#"+currentDrum).addClass("pressed");
    setTimeout(function () {
        $("#" + currentDrum).removeClass("pressed");
    }, 100);
}

$(document).keypress(function(event){
        if(!start && event.key==" ")
        {
            startTimer();
            nextSequence();
            start=true;
            $(".start").text("Started");
        }
        else if(start && validKeys.includes(event.key)){
            var userChosenDrum=$("."+event.key).attr("id");
            userClickedPattern.push(userChosenDrum);
            checkAnswer(userClickedPattern.length-1);
            playSound(userChosenDrum);
            animatePress(userChosenDrum);
        }
});

$(document).on("click",".start",function(){
    if(!start)
    {
        startTimer();
        nextSequence();
        start=true;
        $(".start").text("Started");
    }
})


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
        if(userClickedPattern.length===gamePattern.length)
        {
              if(level > highScore){
                highScore = level;
                $(".highScore").text("High Score: " + highScore);
                $(".level").text("Level : "+level);
            }
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else
    {
        stopTimer();
        var w = new Audio("sounds/wrong.mp3");
        w.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $(".level").text("Game over. You lost at level  "+level);
        $(".start").text("Start");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    start=false;
}

function shuffleButtons() {
    let container = $(".set");
    let buttons = container.find(".drum").toArray();
    for (let i = buttons.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
    }
    container.empty();
    let row1 = $('<div class="row"></div>');
    let row2 = $('<div class="row"></div>');
    for (let i = 0; i < 5; i++) {
        row1.append(buttons[i]);
    }
    for (let i = 5; i < 10; i++) {
        row2.append(buttons[i]);
    }
    container.append(row1);
    container.append(row2);
}

function startTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    $(".time").text("Time : 00:00:00");

    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    let timeString = 
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs);

    $(".time").text("Time : "+timeString);
}

function stopTimer() {
    clearInterval(timerInterval);
}
