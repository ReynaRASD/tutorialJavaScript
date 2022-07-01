"use strict"

////              *********************************
// ******* Funcion Arrow     |    Fat Arrow   |     Lambda

var saludar = nombre => "Holaa " + nombre;
console.log(saludar("Susana"));

var sumar = cantidad => cantidad +10;
console.log(sumar(10));

var calcular = (datoA, datoB) => datoA + datoB;
console.log(calcular(8,10));

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA+datoB+datoC;
}
console.log(generar(5,5));

var validar = () => {
    return "validacion correcta";
}

console.log(validar());


// La funcion Arrow la clave es => que es lo que va retornar
//no se declaran en la estructura original de la función, sino en la invocación de esta

