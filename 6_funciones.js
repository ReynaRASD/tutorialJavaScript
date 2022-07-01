"use strict"

/////   OPERADOR this


const boton = document.querySelector('.boton');

//de esta manera te trae el contenido de HTML
/*
boton.addEventListener('click', function(){
    console.log(this.innerHTML);
})
*/

// funcion Arrow
// de esta forma tienes acceso a toda la ventana y es necesario buscar dentro de ello el valor que deseas

boton.addEventListener('click', () => {
    console.log(this);
    this.location = "http://www.facebook.com"
})




