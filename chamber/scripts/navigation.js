// Use JavaScript to support the responsive menu.
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar')


navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})

const gridButton = document.querySelector('#directory-grid');
const listButton = document.querySelector('#directory-list');
const cardsWrapper = document.querySelector('#cards')
const card = document.querySelectorAll('.card');

console.log("card", card)

gridButton.addEventListener('click', ()=>{  
    // remove background
    listButton.classList.remove('grid-active')
    // add background
    gridButton.classList.add('grid-active')
    
    // update styling
    cardsWrapper.classList.add('grid')
    cardsWrapper.classList.remove('list')

    card.classList.remove('list-card')
})

listButton.addEventListener('click', ()=>{
    // add background
    listButton.classList.add('grid-active')
    // remove background
    gridButton.classList.remove('grid-active')

    // update styling
    cardsWrapper.classList.remove('grid')
    cardsWrapper.classList.add('list')

    card.classList.add('list-card')
})