// Burger Menu
const burgerBtn = document.querySelector('.btn--burger');
const burgerMenu = document.querySelector('.mobile-overlay');
const wrapper = document.querySelector('.wrapper');
const mask = document.querySelector('.mask');

burgerBtn.addEventListener('click', function(){
	burgerBtn.classList.toggle('active');
	burgerMenu.classList.toggle('open');
    document.body.classList.toggle("noscroll");
	wrapper.classList.toggle("noscroll");
	mask.hidden = !mask.hidden;
});

// Lang Menu
const langBtnText = document.querySelector('.header__buttons-lang-text');
const langList = document.querySelectorAll('[data-lang]');

langList.forEach(item => {
	item.addEventListener('click', function(){
		langBtnText.innerHTML = item.innerHTML;
	})
});

// Blog
const blogList = document.querySelectorAll('.banner__blog-item');

blogList.forEach(item => {
	item.addEventListener('click', function(event){
		if(event.target.closest('.banner__blog-item')) {
			blogList.forEach(item => item.classList.remove('active-blog'));
			item.classList.add('active-blog');
		}
	})
});
