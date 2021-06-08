const btns = document.querySelectorAll('.tabs__btns button');
const contents = document.querySelectorAll('.tabs__contents');

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		removeActive();
		btn.classList.add('btn--active');

		if (contents[0].classList.contains('tabs__content--active')) {
			contents[0].classList.remove('tabs__content--active');
			contents[0].classList.add('tabs__content--active');
		} else {
			contents[0].classList.add('tabs__content--active');
			contents[0].classList.remove('tabs__content--active');
		}
	});
});

function removeActive() {
	btns.forEach((btn) => {
		btn.classList.remove('btn--active');
	});
}
