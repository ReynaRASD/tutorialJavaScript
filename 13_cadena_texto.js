"use strict"

// metodos de busqueda

var mensaje = "Estoy aprendiendo Javascript";

//startsWith
//busca si inicia con esa palabra, devuelve un booleano
var resultado = mensaje.startsWith("ja");
console.log(resultado);

//endsWith
//busca si termina con esa palabra
var resultado1 = mensaje.endsWith("ja");
console.log(resultado1);


 //includes
//busca la palabra desde la posicion que le das
 var resultado3 = mensaje.includes("Estoy", 6);
 console.log(resultado3);