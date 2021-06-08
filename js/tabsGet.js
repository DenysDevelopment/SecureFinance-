const btns = document.querySelectorAll('.tabs-get__btns button');
const contents = document.querySelectorAll('.tabs-get__contents');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		removeActive();
		btn.classList.add('btn--active');

		removeActiveContent();
		contents[idx].classList.add('tabs-get__content--active');
	});
});

function removeActive() {
	btns.forEach((btn) => {
		btn.classList.remove('btn--active');
	});
}
function removeActiveContent() {
	contents.forEach((content) => {
		content.classList.remove('tabs-get__content--active');
	});
}
