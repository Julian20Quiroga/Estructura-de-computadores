window.onscroll = function(){myfunction()};

let secciones = document.getElementsByTagName('section');
let fechas = document.getElementsByClassName('fecha');

function myfunction() {
    if (window.pageYOffset >= secciones[0].offsetTop){
        eliminarclase();
    }

    if (window.pageYOffset >= secciones[1].offsetTop - 100)  {
        eliminarclase();
    fechas[0].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[2].offsetTop - 100)  {
        eliminarclase();
    fechas[1].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[3].offsetTop - 100)  {
        eliminarclase();
    fechas[2].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[4].offsetTop - 100)  {
        eliminarclase();
    fechas[3].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[5].offsetTop - 100)  {
        eliminarclase();
    fechas[4].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[6].offsetTop - 100)  {
        eliminarclase();
    fechas[5].classList.add('seleccionado')
    }
    
    if (window.pageYOffset >= secciones[7].offsetTop - 100)  {
        eliminarclase();
    fechas[6].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[8].offsetTop - 100)  {
        eliminarclase();
    fechas[7].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[9].offsetTop - 100)  {
        eliminarclase();
    fechas[8].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[10].offsetTop - 100)  {
        eliminarclase();
    fechas[9].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[11].offsetTop - 100)  {
        eliminarclase();
    fechas[10].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[12].offsetTop - 100)  {
        eliminarclase();
    fechas[11].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[13].offsetTop - 100)  {
        eliminarclase();
    fechas[12].classList.add('seleccionado')
    }

    if (window.pageYOffset >= secciones[14].offsetTop - 100)  {
        eliminarclase();
    fechas[13].classList.add('seleccionado')
    }
}

function eliminarclase() {
    for (let i = 0; i < fechas.length; i++) {
        fechas[i].classList.remove('seleccionado');
    }
}