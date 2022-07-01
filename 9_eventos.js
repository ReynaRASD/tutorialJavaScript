"use strict"

// Temporizadores o timers

// *****   setInterval
// *****   setTimeout


/*
var temporizador = setInterval(function(){
    setColor()
}, 2000);
// cambia cada dos segundos
*/

setTimeout(function(){
    // con setTime solo sucedera una vez
    setColor()
}, 3000);

function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor(){
    clearInterval(temporizador)
}