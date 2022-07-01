"use strict"

var numero = 2.5;

console.log("toExponential: " + numero.toExponential(5));

console.log("toFixed: " + numero.toFixed(5));
// si es cerom hace un redondeo, pero es el numero de decimales que quieres

console.log("toPrecision: " + numero.toPrecision(3));
//numero de decirmales y enteros que quieres

console.log("toString: " + numero.toString());
//numeros a cadena de texto
