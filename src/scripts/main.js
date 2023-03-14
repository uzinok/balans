window.addEventListener('load', function() {
	// document.body.classList.remove('no-js');

	if (document.querySelector('.work__slider__list')) {
		$('.work__slider__list').slick({
			infinite: true,
			prevArrow: $('.work__slider__button-prev'),
			nextArrow: $('.work__slider__button-next'),

			lazyLoad: 'progressive',
			mobileFirst: true,
			centerMode: true,
			// centerPadding: '4px',

			responsive: [{
				breakpoint: 768,
				settings: {
					// centerPadding: '12px'
				}
			}]
		});
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
