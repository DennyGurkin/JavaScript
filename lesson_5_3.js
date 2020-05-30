/* Задание 3. 
a. Сделайте модальное (появляющееся и исчезающее) окно
b. (не обязательное задание) Сделайте анимацию при появлении и исчезании. */

let modal = document.querySelector('.wrap');
let closeBtn = document.querySelector('span');
let showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function(){
modal.classList.add('hidden');
});

showBtn.addEventListener('click', function(){
modal.classList.remove('hidden');
});