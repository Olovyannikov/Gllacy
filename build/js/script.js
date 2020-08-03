let controlButton1 = document.querySelector('.slider__controls-item--1');
let controlButton2 = document.querySelector('.slider__controls-item--2');
let controlButton3 = document.querySelector('.slider__controls-item--3');

let slide1 = document.querySelector('.slider__slide--1');
let slide2 = document.querySelector('.slider__slide--2');
let slide3 = document.querySelector('.slider__slide--3');

let bodyColor = document.querySelector('.body');

controlButton1.onclick = function () {
    slide1.classList.add('slider__slide--current');
    slide2.classList.remove('slider__slide--current');
    slide3.classList.remove('slider__slide--current');

    controlButton1.classList.add('slider__controls-item--current');
    controlButton2.classList.remove('slider__controls-item--current');
    controlButton3.classList.remove('slider__controls-item--current');

    bodyColor.classList.add('body--grey');
    bodyColor.classList.remove('body--violet');
    bodyColor.classList.remove('body--pink');
};

controlButton2.onclick = function () {
    slide1.classList.remove('slider__slide--current');
    slide2.classList.add('slider__slide--current');
    slide3.classList.remove('slider__slide--current');
    controlButton1.classList.remove('slider__controls-item--current');
    controlButton2.classList.add('slider__controls-item--current');
    controlButton3.classList.remove('slider__controls-item--current');

    bodyColor.classList.remove('body--grey');
    bodyColor.classList.add('body--violet');
    bodyColor.classList.remove('body--pink');
};

controlButton3.onclick = function () {
    slide1.classList.remove('slider__slide--current');
    slide2.classList.remove('slider__slide--current');
    slide3.classList.add('slider__slide--current');
    controlButton1.classList.remove('slider__controls-item--current');
    controlButton2.classList.remove('slider__controls-item--current');
    controlButton3.classList.add('slider__controls-item--current');

    bodyColor.classList.remove('body--grey');
    bodyColor.classList.remove('body--violet');
    bodyColor.classList.add('body--pink');
};