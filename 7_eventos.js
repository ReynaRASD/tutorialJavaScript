"use strict"

/// EVENTOS POR MOUSE Y TECLADO

////// *************** EVENTOS MOUSE

const boton = document.querySelector('.boton');

boton.addEventListener('click', function(){
    alert("El boton fue pulsado");
})

boton.addEventListener('mouseover', function(){
   alert("El mouse esta sobre el boton");
})

boton.addEventListener('mouseout', function(){
    alert("MENSAJE \n El mouse esta fuera del boton");
})


///// ******* EVENTOS TECLADO

window.addEventListener('keydown', function(event){
    console.log("Pulsando tecla");
    console.log(String.fromCharCode(event.keyCode));
})

window.addEventListener('keypress', function(event){
    console.log("Tecla pulsada");
})

window.addEventListener('keyup', function(event){
    console.log("Tecla liberada");
})
