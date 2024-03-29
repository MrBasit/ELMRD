
// sec 4
//slider  static
let ul = document.getElementById("myUL");

let li = ul.getElementsByClassName("search_item");

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () { plusSlides(1) }, 3000);
})
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("main-4");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// slider automatic 
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }
  if (n === -1) {
    myTimer = setInterval(function () { plusSlides(n + 2) }, 3000);
  } else {
    myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
  }
}
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
  showSlides(slideIndex = n);
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
const searchInput = document.querySelector('#myInput');
const searchdata = document.querySelector('.search-data');
const navContainer = document.querySelector('.nav-container');
const headerContainer = document.querySelector('.container-header');
const searchMainOverlay = document.querySelector('.search_item_main');
const header = document.querySelector('.header__nav');
searchInput.value="";

searchBtn.onclick = () => {
  header.classList.add("active-header");
  headerContainer.classList.add('search_open');
  navContainer.classList.add('width-90');
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
  searchInput.value=""
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
  searchInput.value = "";
  for (let i=0;i<li.length;i++) {

    console.log(li[i]);
    li[i].style.display="block";
  }
}


function myInput() {
  let input, filter, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  loader=document.getElementById("lod");

  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h2")[0];
      txtValue = a.textContent || a.innerText;
    
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        loader.style.display="block";
        setTimeout(function(){ 
        loader.style.display="none";   
       },400);
        li[i].style.display = "";
        // li[i].style.marginRight="0"
      } else {
          li[i].style.display = "none";  
          // li[i].style.marginRight="-100%" 
      }
  }
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
//login pop up
var modal_login = document.getElementById("login1");

// Get the button that opens the modal_login
var btn_login = document.getElementById("popup2");

// When the user clicks on the button, open the modal_login
btn_login.onclick = function() {
  modal_login.style.display = "flex";
}

//signup pop up
// Get the modal
var modal = document.getElementById("signup1");

// Get the button that opens the modal
var btn = document.getElementById("popup1");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal_login) {
    modal_login.style.display = "none";
  }
}

function fun(){
  if(document.getElementById('mail').value!==''){
  document.getElementById('mail').value='';
  document.getElementById("small-e1").style.display="none";
  document.getElementById("small").style.display="block";
 }
 else{
  document.getElementById("small").style.display="none";
  document.getElementById("small-e1").style.display="block";
 }
}

function login_input(){
    document.getElementById('mail2').value='';
    document.getElementById('pass').value='';
 
}
function login_signup(){
  document.getElementById('mail3').value='';
  document.getElementById('pass2').value='';
  document.getElementById('pass3').value='';
  document.getElementById('name').value='';

}

  



