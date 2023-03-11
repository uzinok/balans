window.addEventListener('load', function() {
	document.body.classList.remove('no-js');

	if (this.document.querySelector('.swiper')) {
		const swiper = new Swiper('.swiper', {
			// Optional parameters
			spaceBetween: 4,
			initialSlide: 1,

			breakpoints: {
				768: {
					spaceBetween: 12,
				}
			},

			// Navigation arrows
			navigation: {
				nextEl: '.work__slider__button-next',
				prevEl: '.work__slider__button-prev',
			}
		});
	}
});
