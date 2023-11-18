const belle = document.querySelector('.belle') /* variable */
const raiponce = document.querySelector('.raiponce')
const rdn = document.querySelector('.rdn')
const vaiana = document.querySelector('.vaiana')
const cendrillon = document.querySelector('.cendrillon')

belle.addEventListener('click',()=>{
    belle.classList.toggle('ouvert') /* changement de la classe 'ouvert' */
})
raiponce.addEventListener('click',()=>{
    raiponce.classList.toggle('ouvert') 
})
rdn.addEventListener('click',()=>{
    rdn.classList.toggle('ouvert') 
})
vaiana.addEventListener('click',()=>{
    vaiana.classList.toggle('ouvert') 
})
cendrillon.addEventListener('click',()=>{
    cendrillon.classList.toggle('ouvert') 
})