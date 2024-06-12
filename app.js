// Burger Menu
const burgerBtn = document.querySelector('.btn--burger');
const burgerMenu = document.querySelector('.mobile-overlay');

burgerBtn.addEventListener('click', function(){
	burgerBtn.classList.toggle('active');
	burgerMenu.classList.toggle('open');
    document.body.classList.toggle("noscroll");
});

// Lang Menu
const langBtnText = document.querySelector('.header__buttons-lang-text');
const langList = document.querySelectorAll('[data-lang]');

langList.forEach(item => {
	item.addEventListener('click', function(){
		langBtnText.innerHTML = item.innerHTML;
	})
});