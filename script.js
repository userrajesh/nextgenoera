// HERO SLIDER

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

index++;

if(index === slides.length){
index = 0;
}

}

setInterval(showSlide,4000);


// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {

nav.classList.toggle("active");

if(nav.classList.contains("active")){
toggle.innerHTML = "✕";
}else{
toggle.innerHTML = "☰";
}

});