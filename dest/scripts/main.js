"use strict";

window.addEventListener('load', function () {
  document.body.classList.remove('no-js');
  if (document.querySelector('.work__slider__list')) {
    var sliderParam = {
      infinite: true,
      prevArrow: $('.work__slider__button-prev'),
      nextArrow: $('.work__slider__button-next'),
      lazyLoad: 'progressive',
      mobileFirst: true,
      centerMode: true,
      centerPadding: '10px',
      responsive: [{
        breakpoint: 768,
        settings: {
          centerPadding: '26px'
        }
      }, {
        breakpoint: 990,
        settings: {
          centerPadding: '58px'
        }
      }]
    };
    $('.work__slider__list').slick(sliderParam);
  }
  if (document.querySelector('.planning__list')) {
    var _sliderParam = {
      // infinite: false,
      prevArrow: $('.planning__slider__button-prev'),
      nextArrow: $('.planning__slider__button-next'),
      lazyLoad: 'progressive',
      mobileFirst: true,
      centerPadding: '60px'
    };
    $('.planning__list').slick(_sliderParam);
  }

  // if (document.querySelector('.swiper')) {
  // 	const swiper = new Swiper('.swiper', {
  // 		loop: true,
  // 		spaceBetween: 4,
  // 		initialSlide: 1,

  // 		breakpoints: {
  // 			768: {
  // 				spaceBetween: 12,
  // 			}
  // 		},

  // 		// Navigation arrows
  // 		navigation: {
  // 			nextEl: '.work__slider__button-next',
  // 			prevEl: '.work__slider__button-prev',
  // 		}
  // 	});
  // }
});