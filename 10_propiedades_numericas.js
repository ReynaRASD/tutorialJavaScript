"use strict"


//// *************   PROPIEDADES NUMERICAS


console.log("MAX VALUE: " + Number.MAX_VALUE);
console.log("MIN.VALUE: " + Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY: " + Number.NEGATIVE_INFINITY);
console.log("POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY);
console.log("NaN: " + Number.NaN);



///// ************   METODOS NUMERICOS

var numero = "10.595";
//var numero = 10.595;

console.log('Number: ', typeof numero, typeof Number(numero));
console.log('parseInt: ', parseInt(numero));
console.log('parseFloat: ', parseFloat(numero));
console.log('isNan: ', isNaN(numero));
console.log('isInteger: ', Number.isInteger(numero));