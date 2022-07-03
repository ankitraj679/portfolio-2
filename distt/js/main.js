const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
navListItem = document.querySelectorAll('.nav-list_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        hamBurger.classList.add('open');
        nav.classList.add('open');
        navList.classList.add('open');
        navListItem.forEach(item => item.classList.add('open'));

        showMenu = true;
    }else{
        hamBurger.classList.remove('open');
        nav.classList.remove('open');
        navList.classList.remove('open');
        navListItem.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}