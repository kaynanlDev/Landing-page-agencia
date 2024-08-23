const btn = document.querySelector('.burguer');
const menu = document.querySelector('.menu-mobile');

btn.addEventListener('click', () =>{
    menu.classList.toggle('active')
})