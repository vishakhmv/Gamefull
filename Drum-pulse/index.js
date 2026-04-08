alert(
  "You were fooled😂. You requested Simon Master, but navigated to Drum Pulse.",
);

var nofb=document.querySelectorAll(".drum").length;

for(var i=0;i<nofb;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var bih=this.innerHTML;
        makeSound(bih);
        keyAnimation(bih);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    keyAnimation(event.key);
});

 function makeSound(key){
            switch (key) {
            case "w":
                var tom1=new Audio("./sounds/snare.mp3");
                tom1.play();                
                break;

                case "a":
                var tom2=new Audio("./sounds/kick-bass.mp3");
                tom2.play();                
                break;
        
                case "s":
                var tom3=new Audio("./sounds/tambourine.mp3");
                tom3.play();                
                break;

                case "d":
                var tom4=new Audio("./sounds/crash.mp3");
                tom4.play();                
                break;

                case "f":
                var snare=new Audio("./sounds/open.mp3");
                snare.play();                
                break;

                case "g":
                var kickbass=new Audio("./sounds/tom-1.mp3");
                kickbass.play();                
                break;

                case "h":
                var clap=new Audio("./sounds/tom-2.mp3");
                clap.play();                
                break;

                case "j":
                var crash=new Audio("./sounds/tom-2.mp3");
                crash.play();
                break;

                case "k":
                var open=new Audio("./sounds/snare.mp3");
                open.play();                
                break;

                case "l":
                var closed=new Audio("./sounds/closed.mp3");
                closed.play();                
                break;

                default:
                break;
        }
}

function keyAnimation(ck){
    var activeButton=document.querySelector("."+ck);
    if (!activeButton) {
        return;
    }
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}