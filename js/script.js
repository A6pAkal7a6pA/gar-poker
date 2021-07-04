const swiper = new Swiper('.slider', {
	loop: false,
	speed: 1000,
	effect: 'coverflow',
	slidesPerView: "auto",
	initialSlide: 3,
	centeredSlides: true,
	slideToClickedSlide: true,
	autoHeight: true,
	grabCursor: true,
	coverflowEffect: {
		rotate: 0,
		stretch: 30,
		depth: 120,
		modifier: 1,
		slideShadows: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

});

document.querySelectorAll(".poker-info__title").forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.add("active");
		getSiblings(item).forEach((item) => {
			item.classList.remove("active");
		});
	});
});

let getSiblings = function (e) {
	let siblings = [];
	if (!e.parentNode) {
		return siblings;
	}
	let sibling = e.parentNode.firstChild;
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== e) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}
	return siblings;
};