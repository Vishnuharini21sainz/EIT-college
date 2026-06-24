// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

const icon=themeBtn.querySelector("i");

if(document.body.classList.contains("dark")){

icon.classList.remove("fa-moon");

icon.classList.add("fa-sun");

localStorage.setItem("theme","dark");

}

else{

icon.classList.remove("fa-sun");

icon.classList.add("fa-moon");

localStorage.setItem("theme","light");

}

});

}



// LOAD SAVED THEME

window.addEventListener("load",()=>{

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="dark"){

document.body.classList.add("dark");

if(themeBtn){

const icon=themeBtn.querySelector("i");

icon.classList.remove("fa-moon");

icon.classList.add("fa-sun");

}

}

});





// ================= COUNTER =================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=target/150;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(updateCounter,15);

}

else{

counter.innerText=target;

}

};

updateCounter();

});







// ================= SCROLL REVEAL =================

const reveals=document.querySelectorAll(

".card,.course,.vision-card,.program,.research-card,.training-card,.event-card,.alumni-card,.company,.campus-card,.lab,.blog-card,.story-card"

);


function reveal(){

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

const height=window.innerHeight;

if(top<height-100){

item.classList.add("activeReveal");

}

});

}


window.addEventListener("scroll",reveal);

reveal();








// ================= STICKY NAV =================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(nav){

if(window.scrollY>50){

nav.style.boxShadow=

"0 10px 30px rgba(0,0,0,0.15)";

}

else{

nav.style.boxShadow="none";

}

}

});








// ================= FLOAT HERO =================

const heroText=document.querySelector(

".hero-content, .hero-text, .about-content"

);


if(heroText){

setInterval(()=>{

heroText.style.transform="translateY(-10px)";

heroText.style.transition=".6s";


setTimeout(()=>{

heroText.style.transform="translateY(0px)";

},700);


},2000);

}









// ================= FORM ALERT =================

const forms=document.querySelectorAll("form");

forms.forEach(form=>{

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Form submitted successfully!");

form.reset();

});

});








// ================= IMAGE ZOOM =================

const imgs=document.querySelectorAll("img");

imgs.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

img.style.transition=".4s";

});


img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});








// ================= TYPEWRITER =================

const heading=document.querySelector(

".hero h1, .hero-text h1, .about-content h1"

);


if(heading){

const text=heading.innerText;

heading.innerText="";

let i=0;

function type(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(type,60);

}

}

type();

}
