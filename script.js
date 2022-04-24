const search = document.querySelector('.header__search');
const btn = document.querySelector('main .btn.dropdown-toggle');
const searchTwo = document.querySelector('.main__search--two');
search.onclick = function() {
    btn.classList.toggle('btn');
    btn.classList.toggle('not-visible');
    btn.classList.toggle('dropdown-toggle');
    searchTwo.classList.toggle("visible"); 
};