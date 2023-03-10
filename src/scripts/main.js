window.addEventListener('load', function() {
	document.body.classList.remove('no-js');

	if (this.document.querySelector('.swiper')) {
		const swiper = new Swiper('.swiper', {
			// Optional parameters
			loop: true,

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	}
});
