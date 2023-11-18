const burger = document.querySelector('.burger')
const header = document.querySelector('.header')
const menu2 = document.querySelector('.menu2')

burger.addEventListener('click',()=> {

    header.classList.toggle('visible')
    menu2.classList.toggle('visible')

})