
for (var index=0;index<document.querySelectorAll(".drum").length;index++){

  document.querySelectorAll(".drum")[index].addEventListener("click",function(){

    switch(this.innerHTML){
      case 'w':
      var myAudio=new Audio('sounds/crash.mp3');
      myAudio.play();
      break;

      case 'a':
      var myAudio=new Audio('sounds/kick-bass.mp3');
      myAudio.play();
      break;

      case 's':
      var myAudio=new Audio('sounds/snare.mp3');
      myAudio.play();
      break;

      case 'd':
      var myAudio=new Audio('sounds/tom-1.mp3');
      myAudio.play();
      break;

      case 'j':
      var myAudio=new Audio('sounds/tom-2.mp3');
      myAudio.play();
      break;

      case 'k':
      var myAudio=new Audio('sounds/tom-3.mp3');
      myAudio.play();
      break;

      case 'l':
      var myAudio=new Audio('sounds/tom-4.mp3');
      myAudio.play();
      break;
    }
    buttonAnimation(this.innerHTML);
})
    document.addEventListener("keypress",function(){
      switch(event.key){
        case 'w':
        var myAudio=new Audio('sounds/crash.mp3');
        myAudio.play();
        break;

        case 'a':
        var myAudio=new Audio('sounds/kick-bass.mp3');
        myAudio.play();
        break;

        case 's':
        var myAudio=new Audio('sounds/snare.mp3');
        myAudio.play();
        break;

        case 'd':
        var myAudio=new Audio('sounds/tom-1.mp3');
        myAudio.play();
        break;

        case 'j':
        var myAudio=new Audio('sounds/tom-2.mp3');
        myAudio.play();
        break;

        case 'k':
        var myAudio=new Audio('sounds/tom-3.mp3');
        myAudio.play();
        break;

        case 'l':
        var myAudio=new Audio('sounds/tom-4.mp3');
        myAudio.play();
        break;
      }
      buttonAnimation(event.key);
  });
}
function buttonAnimation(key){
  //in jQuery
  //$("."+key).addClass("pressed");
  document.querySelector("."+key).classList.add("pressed");

setTimeout(function() {
  //your code to be executed after 1 second
  document.querySelector("."+key).classList.remove("pressed");
}, 100);

}
