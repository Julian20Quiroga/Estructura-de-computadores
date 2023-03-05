let btnMenu = document.querySelector('.btn_menu');
let menu = document.querySelector('.nav');
let close_menu = document.querySelector('.close_menu');
let capa_menu = document.querySelector('.container_menu')

btnMenu.addEventListener('click', ()=> {
    menu.classList.toggle('mostrar');
    btnMenu.classList.toggle('desaparecer_icono_menu');
    capa_menu.classList.toggle('container_menu--click');
})

close_menu.addEventListener('click', ()=>{
    menu.classList.toggle('mostrar');
    btnMenu.classList.toggle('desaparecer_icono_menu');
    capa_menu.classList.toggle('container_menu--click');
})