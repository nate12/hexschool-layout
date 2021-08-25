import 'bootstrap';
import Swiper, { Navigation, Grid } from 'swiper';

// 漢堡點擊動畫
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
});

new Swiper(".columnSwiper", {
  modules: [Navigation, Grid],
  slidesPerView: 1,
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grid: {
    rows: 3,
    fill: 'row'
  },
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      spaceBetween: 16,
      grid: {
        rows: 2,
      },
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    }
  }
});