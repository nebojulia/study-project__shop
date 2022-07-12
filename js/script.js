'use strict'

let $burger = document.querySelector('.header__burger');
let $close = document.querySelector('.nav__close');
let $darker = document.querySelector('.page__darker');


$burger.addEventListener('click', function () {
    document.body.classList.toggle('open');
})

$close.addEventListener('click', () => {
    document.body.classList.toggle('open');
})

$darker.addEventListener('click', () => {
    document.body.classList.remove('open');
})