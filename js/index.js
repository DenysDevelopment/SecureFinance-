const subMenu = () => {
	const subMenu = document.querySelectorAll('.menu__sub-menu');

	if (subMenu) {
		subMenu.forEach((el) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				if (el.classList.contains('menu__sub-menu--active')) {
					el.classList.remove('menu__sub-menu--active');
				} else {
					el.classList.add('menu__sub-menu--active');
				}
			});
		});
	}
};

const select = () => {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');

	selectHeader.forEach((item) => {
		item.addEventListener('click', selectToggle);
	});

	selectItem.forEach((item) => {
		item.addEventListener('click', selectChoose);
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	function selectChoose() {
		let text = this.innerText,
			select = this.closest('.select'),
			currentText = select.querySelector('.select__current');
		currentText.innerText = text;
		select.classList.remove('is-active');
	}
};

const socialLink = () => {
	const links = document.querySelectorAll('.social__item');

	if (links) {
		links.forEach((item) => {
			item.addEventListener('click', () => {
				if (item.classList.contains('social__item--active')) {
					item.classList.remove('social__item--active');
				} else {
					links.forEach((el) => {
						el.classList.remove('social__item--active');
					});
					item.classList.add('social__item--active');
				}
			});
		});
	}
};

const menu = () => {
	const btn = document.querySelector('.menu__icon');

	btn.addEventListener('click', () => {
		btn.classList.toggle('menu__icon--active');
		const list = document.querySelector('.menu__list');

		if (list.classList.contains('active')) {
			list.classList.remove('active');
			document.body.classList.remove('lock');
		} else {
			list.classList.add('active');
			document.body.classList.add('lock');
		}
	});
};

select();
socialLink();
subMenu();
menu();




const mobToggleBtn = document.querySelector('.mobileToggleBtn')
const mobToggle = document.querySelectorAll('.mobile-toggle')
const mobLvlOne = document.querySelectorAll('.menu__li')
const prevHK = document.querySelector('.header__hk')
const iMenu = document.querySelector('.icon-menu')
const iMenuActive = document.querySelector('.menu__icon--active')

if(window.innerWidth <= 1200){
	mobToggleBtn.addEventListener('click', () => {
		mobLvlOne.forEach(el => {
			el.style.display = 'none'
		})
		mobToggle.forEach(el => {
			el.style.display = 'block'
		})
		prevHK.style.display = 'block'
	})

	prevHK.addEventListener('click', () => {
		mobLvlOne.forEach(el => {
			el.style.display = 'block'
		})
		mobToggle.forEach(el => {
			el.style.display = 'none'
		})
		prevHK.style.display = 'none'
		iMenu.addEventListener('click', () => {
			prevHK.style.display = 'block'
		})
		iMenuActive.addEventListener('click', () => {
			prevHK.style.display = 'none'
		})
	})
	
	
	
}
