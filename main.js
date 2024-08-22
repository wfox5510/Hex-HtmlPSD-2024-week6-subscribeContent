import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// 參考 https://codepen.io/lpla/pen/wvqMvML 做出兩個斷點的paganation
var DoublePaganation = new Swiper(".article-swiper", {
  spaceBetween: 48, 
  breakpoints: {
    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  pagination: {
    el: '.swiper-pagination2',
    type: "fraction",
  },
})

var swiper = new Swiper(".article-swiper", {
  spaceBetween: 48, 
  breakpoints: {
    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

swiper.controller.control = DoublePaganation;

var hotsSwiper = new Swiper(".hots-swiper", {
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

const projectSwiper = new Swiper(".project-swiper", {
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});