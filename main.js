import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  renderFraction: function (currentClass, totalClass) {
    return '<span class="' + currentClass + '"></span>' +
      ' of ' +
      '<span class="' + totalClass + '"></span>';
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
