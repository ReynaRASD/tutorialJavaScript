"use strict"
//uso estricto de Javascript

var global = 'Reyna';
let bloque = 'Solis';
const phi = 3.1416;

//transformando strings a numeros
let numberOne = "100";
let numberTwo = 100;

let suma = numberTwo + Number(numberOne);
//console.log(suma);

//parseInt() transforma a enteros
//parseFloat() transforma a decimal


//transformando Number a String

let stringOne = 1500;

let stringTwo = String(stringOne);

// Booleanos

var activo = false;

var estado = Boolean(10>9);

// Fechas
var fecha = new Date();
//console.log(fecha.getDay() +" "+ fecha.getDate() + " "+ fecha.getMonth());

//////// Simbolos

var simbolo = Symbol();
//Dato unico asignado a cada simbolo, intrisico

var ambiente = Symbol('dev');

// JSON -> Javascrip Object Notation

var persona = [
    {nombre: 'Reyna', apellido: 'Solis'},
    {nombre: 'Valentine', apellido: 'Solis'},
    {nombre: 'Woo', apellido: 'Solis'},
]

//JSON a cadena de texto
var personatxt = JSON.stringify(persona);

// Cadena ed texto a JSON
var nuevaPersona = JSON.parse(personatxt);

// ************************************************************************

// OPERADORES ARITMETICOS, RELACIONALES, LOGICOS y ASIGNACION

// ARTIMETICOS

let suma2 = 5 + 2;
let resta = 5 - 2;
let multi = 5 * 2;
let div = 10 / 2;
let residuo = 15 % 2;
let incremento = 20;
incremento ++;
//incremento = incremento +1;
let decremento = 20;
decremento --;
//decremento = decremento -1;



// RELACIONALES (se obtiene un booleano)
let mayor = 5 > 2;
let menor = 5 < 2;
let mayorOigual = 5 >= 2;
let menorOigual = 5 <= 2;
let igualQue = 5 == 2;
let noEsIgualQue = 5 != 2;



// LOGICOS
var datoA = 10;
var datoB = 20;

let and = (datoA > 10 && datoB > 10);
let or = (datoA > 5 || datoB < 5);
let not = !(datoA > 10);


// ASIGNACION

// asignacion SIMPLE
let igual = datoA;

//sumar y asignar
let masIgual = 20;
masIgual+= datoA;

//restar y asginar
let menosIgual = 30;
menosIgual-=10;

//multiplicar y asignar
let porIgual = 60;
porIgual *= 10;

//dividir y asignar
let entreIgual = 50;
entreIgual/=10;


// OPERADOR TERNARIO O CONDICIONAL
 var ternario = datoA > datoB ? "Si es mayor" : "No es mayor";
 //console.log(ternario);

 // OPERADOR TIPO DE DATO EN Javascript

 var cadena = "Reyna";
var edad = 26;
var activo = true;

var persona = {
    edad: 34,    //numero
    deporte: 'Futbol'   //cadena
}  // objeto

/*
console.log(typeof(cadena));
console.log(typeof(edad));
console.log(typeof(activo));
console.log(typeof(persona));
console.log(typeof(persona.edad));
*/