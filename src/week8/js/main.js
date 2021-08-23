import 'bootstrap';
import Swiper from 'swiper';
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use(Navigation);

// 漢堡點擊動畫
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
});

new Swiper(".columnSwiper", {
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 8,
  slidesPerColumnFill: 'row',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
      slidesPerView: 2.1,
      slidesPerColumn: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
    }
  }
});