'use strict'

let $burger = document.querySelector('.header__burger');
let $close = document.querySelector('.nav__close');
let $page = document.querySelector('.page');
let $pageNav = document.querySelector('.page__nav');


$burger.addEventListener('click', function () {
    document.body.classList.toggle('open');
})

$close.addEventListener('click', () => {
    document.body.classList.toggle('open');
})

window.addEventListener('click', event => {
    /*if(!event.target.closest('page__nav'))  {
        $pageNav.classList.remove('open');
    }*/
    if(!event.target.className === 'PAGE__NAV'){
		document.body.classList.toggle("open");
	}
})

/**$page.addEventListener('click', event => {
    if(!event.target.className.contains === 'PAGE__NAV')
    document.body.classList.toggle('open');
})*/

/**$pageNav.addEventListener('click', function() {
	setTimeout(function() {
		text.classList.remove("hide");
	}, 100);
});

$page.addEventListener('click', function(event) {
	if(event.target.className !== 'PAGE__NAV'){
		text.classList.toggle("open");
	}
});*/