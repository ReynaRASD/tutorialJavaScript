"use strict"

//CONDICION if

var datoA = 100;
var datoB = 20;
var resultado = "Sin datos";

if(datoA > datoB){
    resultado = "A es mayor";

    if(datoA >= 100){
        resultado = "A Mayor o igual a 100";
    }

}else if (datoA < datoB) {
    resultado = "B es mayor";
}else if (datoA == datoB) {
    resultado = "Son iguales";
}else{
    resultado = "No se cumple";
}

//console.log("El resultado de la condicion es: " + resultado);

// SWITCH

var edad = 50;
var resultado = "";

switch (edad){
    case 10:
        resultado = "Edad es 10 años";
    break;
    case 20:
        resultado = "Edad es 20 años";
    break;
    case 30:
        resultado = "Edad es 30 años";
    break;
    case 40:
        resultado = "Edad es 40 años";
    break;
    default:
        resultado = "Fuera de parametros";
    break;
}   

console.log(resultado);