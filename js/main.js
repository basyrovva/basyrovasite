const btnOpen = document.querySelector(".btn--open");
const modalClose = document.getElementById("modal-close");
const modal = document.querySelector(".modal");
const navClose = document.getElementById("nav-close");
const modalViewHandler = () => {
    modal.classList.toggle('modal--open'); //toggle включает класс modal--open
}
btnOpen.addEventListener('click', modalViewHandler);
modalClose.addEventListener('click', modalViewHandler);

const menu = document.querySelector(".main-nav");
const burger = document.querySelector(".burger__line");
const burgerBtn = document.querySelector(".burger");

// burgerBtn.addEventListener('click', ()=>{
//     menu.classList.toggle('menu--open');
// });

const menuViewHandler = () => {
    menu.classList.toggle('menu--open'); //toggle включает класс modal--open
}
burgerBtn.addEventListener('click', menuViewHandler);
navClose.addEventListener('click', menuViewHandler);


const burgerViewHandler = () => {
    burger.classList.toggle('burger--none'); //toggle включает класс modal--open
}
burgerBtn.addEventListener('click', burgerViewHandler);
navClose.addEventListener('click', burgerViewHandler);