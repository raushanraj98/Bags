const search = document.querySelector('.header__search');
const btn = document.querySelector('main .btn.dropdown-toggle');
const searchTwo = document.querySelector('.main__search--two');
search.onclick = function() {
    btn.style.display = 'none';
    searchTwo.style.display = 'block';
};