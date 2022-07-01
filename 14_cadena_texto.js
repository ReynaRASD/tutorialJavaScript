"use strict"

//METODOS DE GENERACION, REMPLAZO Y SEPARACION

//repeat
//repite la cadena
var mensaje = "Estoy aprendiendo Javascript";
var resultado = mensaje.repeat(2);
console.log(resultado);

//slice
//inicia en la posicion que le des

var resultado1 = mensaje.slice(6);
console.log(resultado1);


//replace 
//remplaza la oracion que buscas

var resultado2 = mensaje.replace("aprendiendo", "valiendo madre en");
console.log(resultado2);

//split
//separa el texto
var resultado3 = mensaje.split("");
console.log(resultado3);

 //trim
 //elimina espacios en blanco antes y despues de una cadena
 var mensaje2 = "             Estoy ap    rendiendo Ja     vascri    pt                  ";
 var resultado4 = mensaje2.trim();
 console.log(resultado4);

 //toLowerCase
 //minusculas
var mensaje3 = "ESTAMOS BIEN"
console.log(mensaje3.toLowerCase());

 //toUpperCase
 //mayusculas
 var mensaje4 = "wenas";
 console.log(mensaje4.toUpperCase());

 //concat
// concatenar cadenas de texto
var mensaje5 = "hola";
console.log(mensaje5.concat(mensaje4, 'y ya'));

console.log(`saludos ${mensaje4} y tambien esta ${mensaje5}`);

