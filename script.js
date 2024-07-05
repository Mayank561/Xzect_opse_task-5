<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    
function toggleMenu() {
    const list = document.querySelector('.list');
    list.classList.toggle('active');
}


// Select elements by class name
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











  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

