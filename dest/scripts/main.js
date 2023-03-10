"use strict";

window.addEventListener('load', function () {
  document.body.classList.remove('no-js');
  if (this.document.querySelector('.swiper')) {
    var swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev'
      }
    });
  }
});