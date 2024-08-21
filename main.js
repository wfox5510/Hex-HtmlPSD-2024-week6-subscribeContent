import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// 參考 https://codepen.io/lpla/pen/wvqMvML 做出兩個斷點的paganation
var DoublePaganation = new Swiper(".mySwiper", {
  pagination: {
    el: '.swiper-pagination2',
    type: "fraction",
  },
})

var swiper = new Swiper(".mySwiper", {
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