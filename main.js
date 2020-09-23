slideNumber=1;
ShowSlide(slideNumber);

function ShowSlide(n){
 let slides = document.getElementsByClassName("main-4");
 let dots = document.getElementsByClassName("dot");

 for(i=0;i<slides.length;i++){
   slides[i].style.display="none";
 }
 for(i=0;i<dots.length;i++){
   dots[i].className="dot";
 }
 slides[n-1].style.display="block";
 dots[n-1].className="dot active";
}


function ActiveBurger(){
  id=document.getElementById("Burger");
  id.className = "burger menu active";
}
function DisableBurger(){
  id=document.getElementById("Burger");
  id.className = "burger menu";
}