"use strict"

/**
 * 
 *La lista de materiales (Object Model Browser) se compone de los objetos navigator, history, screen, locationy documentque son hijos de window. En el documentnodo está el DOM (Document Object Model), el modelo de objeto de documento, que representa el contenido de la página. Puedes manipularlo usando javascript.

 */

 var boton = document.getElementById('boton');
 var principal = document.getElementsByClassName('principal')[0];

 localStorage.setItem('contenido', 'Cafe con Pan');

 boton.addEventListener('click', ()=>{
    
    //boton.style.backgroundColor='green';
    //boton.style.color='white';
    //boton.style.width='200px';

    console.log("innerWidth", window.innerWidth);
    console.log("innerHeight", window.innerHeight);
    
    var contenido = localStorage.getItem('contenido');
    principal.innerHTML = contenido;
    window.history.forward();
    window.history.back();
    window.history.go(3);

 });