"use strict";

window.addEventListener('load', function () {
  // document.body.classList.remove('no-js');

  if (document.querySelector('.work__slider__list')) {
    var bodyStyles = window.getComputedStyle(document.body);
    var offsetPage = +bodyStyles.getPropertyValue('--offset-page').replace("px", "");
    var offsetSlider = +bodyStyles.getPropertyValue('--offset-slider').replace("px", "");
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