const menuOpen = document.querySelector('#menu-open')
const menuClose = document.querySelector('#menu-close')
const mobileMenu = document.querySelector('#mobile-menu')


menuOpen.addEventListener('click', () => {
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
    mobileMenu.style.display = 'block'
})


menuClose.addEventListener('click', () => {
    menuClose.style.display = 'none'
    menuOpen.style.display = 'block'
    mobileMenu.style.display = 'none'

})