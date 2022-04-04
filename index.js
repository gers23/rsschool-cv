let showMore = document.querySelector('.show-more');
let cardRight = document.querySelector('.right');
let card = document.querySelector('.card-inner');

showMore.addEventListener('click', () => {
    card.classList.toggle('is-flipper')
    // cardRight.classList.toggle('is-flipper')
})