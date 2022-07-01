"use strict"

//* *//

function saludos(nombre, edad){
    var saludo = "Wenas " + nombre + " " + edad;
    //alert("Hola " + edad)
    document.write("<h1>", nombre, "</h1>")
    return saludo;
}

saludos("Reyna", 26);

function contar(cantidad=20){
    document.write("<h2>", cantidad, "</h2>")
    //onsole.log('total: ' + cantidad)
}

contar();


//////   ****** PARAMETRO TIPO REST
function cocinar(ingrediente1, ingrediente2, ...masIngredientes){
    //parametro tipo REST (...)
    document.write("<h3>", ingrediente1, "</h3>");
    document.write("<h3>", ingrediente2, "</h3>");
    document.write("<h3>", masIngredientes, "</h3>");

}

cocinar("pollo", "tomate", "arroz", "frijoles");


////// ****** PARAMETRO SPREAD
function cooking(ingrediente1, ingrediente2, ingrediente3){
    document.write("<h4>", ingrediente1, "</h4>");
    document.write("<h4>", ingrediente2, "</h4>");
    document.write("<h4>", ingrediente3, "</h4>");
}

var ingredientesBase= ["pollito", "tomatito"];

cooking(... ingredientesBase, "Arrozito");


////////// FUNCIONES ANONIMAS 
(
    function(){
        document.write("<h5>", "NO LO HAGA COMPA", "</h5>");
    }
)()

var frio = function() {
    var mensaje = "Wenas";
    return mensaje;
} ///llamala en consola



//////////    ********   CALLBACKS
// A la función que recibe como parámetro otra función y la ejecuta en JavaScript
function calcular(datoA, datoB, sumarCB, restarCB){
    var sum = datoA + datoB;
    var restar = datoA - datoB;
    sumarCB(sum);
    restarCB(restar);
}

calcular(3,2, function(resultado){
    console.log('suma: ' + resultado)
}, function(resultado){
    console.log('resta: ' + resultado)
});