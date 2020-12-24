var lis = document.querySelectorAll(".drum");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", handleClick);
}
function handleClick() {
  makebuton(this.innerHTML);
  shadow(this.innerHTML);
}
document.addEventListener("keypress",function(event){
  makebuton(event.key);
  shadow(event.key);
});

function makebuton(eventKey){
  if (eventKey == "w") {
    audio = new Audio("sounds/tom-1.mp3");
  }
  else if (eventKey == "a") {
    audio = new Audio("sounds/tom-2.mp3");
  }
  else if (eventKey == "s") {
    audio = new Audio("sounds/tom-3.mp3");
  }
  else if (eventKey == "d") {
    audio = new Audio("sounds/tom-4.mp3");
  }
  else if (eventKey == "j") {
    audio = new Audio("sounds/snare.mp3");
  }
  else if (eventKey == "k") {
    audio = new Audio("sounds/crash.mp3");
  }
  else {
    audio = new Audio("sounds/kick-bass.mp3");
  }
  audio.play();
}
function shadow(press){
  document.querySelector("."+press).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+press).classList.remove("pressed");
  },100);
}