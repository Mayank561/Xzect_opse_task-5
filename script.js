
function toggleMenu() {
  var menu = document.querySelector('.list');
  menu.classList.toggle('active'); 
}


const counts = document.querySelectorAll(".count-1");
const count2 = document.querySelectorAll(".count-2");
const count3 = document.querySelectorAll(".count-3");
function counter(counts){
  counts.forEach(count => {
      let i = 0;
      const interval = setInterval(() => {
          if (i > 300) {
              clearInterval(interval);
          } else {
              count.innerHTML = `${i}+`;
              i++;
          }
      }, 10); 
  });
};
counter(counts);

function counter2(count2){
count2.forEach(count =>{
  let i =0;
  const interval = setInterval(()=>{
    if(i>575){
      clearInterval(interval);
    }else{
      count.innerHTML = `${i}+`;
      i++;
    }
  },10);
});
};
counter2(count2);

function counter3(count3){
count3.forEach(count=>{
let i = 0;
const interval = setInterval(()=>{
  if(i> 245){
    clearInterval(interval);

  }else{
    count.innerHTML = `${i}+`;
    i++;
  }
},10)
});
};
counter3(count3);


document.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroup: 1,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 4,
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});

document.addEventListener('DOMContentLoaded', () => {
var swiper = new Swiper('.mySwiper2', {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroup: 1,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1300:{
      slidesPerView: 3,
        slidesPerGroup: 3,
    },
    1200: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    1100: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    600: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    500:{
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
});


// 
var swiper = new Swiper("#mySwiper", {

spaceBetween: 0,
centeredSlides: true,
speed: 1500,
autoplay: {
  delay: 0,
},
loop: true,
slidesPerView: 'auto',
allowTouchMove: false,
disableOnInteraction: true,

});

AOS.init();





$(function() {
  $('.chart').easyPieChart({
    size: 160,
    barColor: "#512888",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#ffffff",
    lineCap: "circle",
    animate: 2000,
  });
});

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
          '<i class="bi bi-arrow-left-short"></i>',
          '<i class="bi bi-arrow-right-short"></i>'  
      ],
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 3 
          }
      }
  });
});

var swiper = new Swiper('#swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});

function toggleMenu() {
  document.querySelector('.list').classList.toggle('active');
}
