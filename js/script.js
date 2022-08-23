// Nav bar
const button = document.querySelector('.nav-button');
const nav = document.querySelector('.nav-bar');

button.addEventListener('click',()=>{
    nav.classList.toggle('active')
})