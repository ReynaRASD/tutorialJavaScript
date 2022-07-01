"use strict"

/////// ********************

/// -------- DESESTRUCTURA DE ARREGLOS

var platillos = ["ceviche", "tacos", "pasta"];

var platillos1= platillos[0];
var platillos2= platillos[1];
var platillos3= platillos[2];

console.log(platillos1 , platillos2 , platillos3);

// otra manera de hacerlo es:

var [plat1, plat2, plat3] = platillos;

console.log(plat1, plat2, plat3);