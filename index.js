document.querySelector("button").addEventListener("click",afterclick)

function afterclick(){
    var audio = new Audio('click.mp3');
    audio.play();
    document.querySelector("button").classList.toggle("whitebtn")
   var x= document.querySelector("button")
    if(x.innerHTML === "dark"){
        x.innerHTML = "light";
      } 
      else {
        x.innerHTML = "dark";
      }
    document.querySelector("body").classList.toggle("body2")

    
    
}



