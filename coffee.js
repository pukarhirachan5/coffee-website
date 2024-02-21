
// swiper bata liyeko hAI
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

  // open close
  let menu = document.querySelector(".menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick=()=>{
    menu.classList.toggle("move");
    navbar.classList.toggle('open-menu');
  };
  // menu on scroll
  window.onscroll=()=>{
    menu.classList.remove("move");
    navbar.classList.remove('open-menu');
  };

  // scroll reveal
  const animate = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:"2500",
    delay:"400",

  })
animate.reveal(".nav");
animate.reveal(".home-text",{origin: "left"});
animate.reveal(".home-img",{origin: "bottom"});
animate.reveal(".ser-box, .product-box, .team-box, .book-data",{intervel:100});

const Latte = document.getElementById('Latte');
const Americano = document.getElementById('Americano');
const Ca = document.getElementById('Cappucino');
const background = document.getElementById('background');
const home = document.getElementById('homer');

function wow(image){
function rotateImage(elementId, angle) {
  

  
  if (image) {
      image.style.transform = `rotate(${angle}deg)`;
  } else {
      console.error(`Element with id '${elementId}' not found.`);
  }
}

// Example: Rotate the image continuously
let currentAngle = 0;
setInterval(() => {
  currentAngle += 1; // Change the angle increment as desired
  rotateImage('image', currentAngle);
}, 10); // Change the interval as desired (milliseconds)

};
wow(Americano);
wow(Ca);




