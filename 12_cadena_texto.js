"use strict"
//  "use strict" es una directiva que indica el modo en que el navegador debe ejecutar nuestro código JavaScript.

var pais = "gringo Aqui es Mexico gringo";
var comida = new String("Tacos");  //objeto
var resultado;

console.log(comida.split(""));
console.log(comida.length);

/// *******   METODOS DE BUSQUEDA

//lastIndexOf
//busca la aparicion de esta palabra
console.log(pais.indexOf("Mexico"));

//indexOf
//busca la aparicion de esta palabra
console.log(pais.lastIndexOf("es"));

//search == indexOf
resultado = pais.search("es");
console.log(resultado);


//search | expresion regular

var resultado2 = pais.search(/co/i);
//el operador i es para que no importe si es minuscula o mayuscula
console.log(resultado2);

// si algun metodo te lanza un -1 es porque no encontro nada xD



// match
var resultado3 =  pais.match(/gringo/g);
//busca la palabra y te un arreglo, la g es de global, busca en todo el string
console.log(resultado3);



//substr
var resultado4 = pais.substr(2, 5);
//es un pedazo de texto, los numeros son las posiciones, inicia en dos y cuenta 5 desde la posicon 2
console.log(resultado4);


//substring
var resultado5 = pais.substring(2, 5);
//es un pedazo de texto, los numeros son las posiciones, inicia en dos y cuenta 5 desde el inicio
console.log(resultado5);


//charAt
//con la posicion exacta te da la letra
var resultado6 = pais.charAt(10);
console.log(resultado6);
