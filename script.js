
// Navbar background on scroll

window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="#00152d";

nav.style.boxShadow="0 5px 20px rgba(0,0,0,0.2)";

}

else{

nav.style.background="#002147";

nav.style.boxShadow="none";

}

});



// Smooth fade animation

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position=card.getBoundingClientRect().top;

const screen=window.innerHeight;

if(position<screen-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});



cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.8s";

});




// Gallery click effect

const images=document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});




// Contact form alert

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

form.reset();

});

}
