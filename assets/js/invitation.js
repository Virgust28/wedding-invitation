// Hamburger menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
menuIcon.addEventListener('click', ()=>{ navLinks.classList.toggle('active'); });

// Countdown
const date = new Date("April 05, 2026 00:00:00").getTime();
setInterval(()=>{
  const now=new Date().getTime();
  const diff=date-now;
  if(diff>0){
    const d=Math.floor(diff/(1000*60*60*24));
    const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const m=Math.floor((diff%(1000*60*60))/(1000*60));
    const s=Math.floor((diff%(1000*60))/1000);
    document.getElementById("days").innerText=d;
    document.getElementById("hours").innerText=h.toString().padStart(2,"0");
    document.getElementById("minutes").innerText=m.toString().padStart(2,"0");
    document.getElementById("seconds").innerText=s.toString().padStart(2,"0");
  }
},1000);

// Floating Petals
const petalContainer=document.querySelector(".petals");
for(let i=0;i<25;i++){
  const petal=document.createElement("div");
  petal.classList.add("petal");
  petal.style.left=Math.random()*100+"vw";
  petal.style.animationDuration=10+Math.random()*10+"s";
  petal.style.animationDelay=Math.random()*10+"s";
  petal.style.opacity=0.5+Math.random()*0.5;
  petalContainer.appendChild(petal);
}

// Smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click',function(e){
    e.preventDefault();
    const targetId=this.getAttribute('href').substring(1);
    const targetSection=document.getElementById(targetId);
    if(targetSection){
      window.scrollTo({top:targetSection.offsetTop-70,behavior:'smooth'});
    }
  });
});

// Auto-scroll gallery
const gallery = document.querySelector('.gallery1');
gallery.innerHTML += gallery.innerHTML;
let scrollPos = 0;
const scrollSpeed = 1;
let isPaused = false;
gallery.addEventListener('mouseenter', () => { isPaused = true; });
gallery.addEventListener('mouseleave', () => { isPaused = false; });

function autoScroll() {
    if (!isPaused) {
        scrollPos += scrollSpeed;
        if (scrollPos >= gallery.scrollWidth / 2) scrollPos = 0;
        gallery.scrollLeft = scrollPos; 
    }
    requestAnimationFrame(autoScroll);
}
autoScroll();


const gallery2 = document.querySelector('.gallery2');
gallery2.innerHTML += gallery2.innerHTML; 

let scrollPos2 = gallery2.scrollWidth / 2; 
const scrollSpeed2 = 1;
let isPaused2 = false;

gallery2.addEventListener('mouseenter', () => { isPaused2 = true; });
gallery2.addEventListener('mouseleave', () => { isPaused2 = false; });

function autoScroll2() {
    if (!isPaused2) {
        scrollPos2--; 
        if (scrollPos2 <= 0) scrollPos2 = gallery2.scrollWidth / 2;
        gallery2.scrollLeft = scrollPos2;
    }
    requestAnimationFrame(autoScroll2);
}

autoScroll2();
