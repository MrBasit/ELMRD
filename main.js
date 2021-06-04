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

// ---- sidebar start ----
// sidebar
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.main__sidebar');

// sidebar func
function sideBarFunc(){
  sidebarOverlay.classList.toggle('active');
  sidebar.classList.toggle('active');

}

// For Menu Disappear
sidebarOverlay.addEventListener('click', () =>{
  sideBarFunc();
});

window.onresize = function() {
  if(this.innerWidth > 991){
      if(sidebar.classList.contains('active')){
        sideBarFunc();
      } 
  }
}

// ---- sidebar end ----


// ---- searchbar start ----
// Search Bar
const searchBtn = document.querySelector('.search-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('input');
const searchdata = document.querySelector('.search-data');
const headerContainer = document.querySelector('.container-header');
const searchMainOverlay = document.querySelector('.search_item_main');
const header = document.querySelector('.header__nav');

searchBtn.onclick = () => {
  header.classList.add("active-header");
  headerContainer.classList.add('search_open');
  searchMainOverlay.classList.add('search_open');
  searchBox.classList.add('active');
  searchInput.classList.add('active');
  searchBtn.classList.add('active');
  cancelBtn.classList.add('active');
  if(searchInput.value != ""){
    let values = searchInput.value;
  searchdata.classList.remove('active');
    searchdata.innerHTML= "You Just Typed : " + "<span style='word-break: break-word; font-weight: 600; letter-spacing: 1px;'>" + values +"</span>";
  }else{
    searchdata.innerHTML = ""
  }
}

cancelBtn.onclick = () => {
  if(scrollY < 200){
    header.classList.remove("active-header");
  }
  searchMainOverlay.classList.remove('search_open');
  headerContainer.classList.remove('search_open');
  searchBox.classList.remove('active');
  searchInput.classList.remove('active');
  searchBtn.classList.remove('active');
  cancelBtn.classList.remove('active');
  searchdata.classList.add('active');
  searchInput.value = '';
}

// ---- searchbar end ----

// Trailer
const trailer1 = document.querySelector('.trailer1');
const trailer2 = document.querySelector('.trailer2');
const trailer3 = document.querySelector('.trailer3');

function trailer(i){
  if(i===1){
    trailer2.classList.remove('active');
    trailer3.classList.remove('active');
    trailer1.classList.add('active');
  }
  if(i===2){
    trailer3.classList.remove('active');
    trailer1.classList.remove('active');
    trailer2.classList.add('active');
  }
  if(i===3){
    trailer1.classList.remove('active');
    trailer2.classList.remove('active');
    trailer3.classList.add('active');
  }
}

function closed(c){
  if(c===1){
    trailer1.classList.remove('active');
  }
  if(c===2){
    trailer2.classList.remove('active');
  }
  if(c===3){
    trailer3.classList.remove('active');
  }
}

// header
document.addEventListener("scroll", () => {
  if (scrollY > 200) {
    document.querySelector('.header__nav').classList.add("active-header");

  }
  else {
    if(!headerContainer.classList.contains('search_open')){

      document.querySelector('.header__nav').classList.remove("active-header");
    }
  }
})

// prevent default
document.querySelector('body').addEventListener('click', preventDflt);
function preventDflt(e){
  var tElment = e.target.getAttribute('href');
  var tElmentP = e.target.parentElement.getAttribute('href');
  if(tElment == '#' || tElmentP == '#'){
    e.preventDefault();
  }
}