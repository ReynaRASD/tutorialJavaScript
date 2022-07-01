"use strict"

/// **************   BUSCAR EN ARREGLOS y FILTRAR

var menu = [
    {nombre: 'birria', precio: '90', pais: 'Canada'},
    {nombre: 'pasta', precio: '30', pais: 'Peru'}, 
    {nombre: 'tacos', precio: '50', pais: 'Mexico'}, 
    {nombre: 'tamales', precio: '60', pais: 'Canada'}
];

////  este solo encuentro 1 elemento, el primero que encuentre
var elegido = menu.find(platillo => platillo.pais == 'Canada');
console.log(elegido);


////  este encuentra todos los elementos que coincidan
var filtro = menu.filter(platillo => platillo.pais == 'Canada');
console.log(filtro);


var validacion = menu.some(platillo => platillo.precio < 50);
//equivale a preguntar si algun platillo es de menos a 20
console.log(validacion);
//regresa un boolean


var validacion2 = menu.every(platillo => platillo.precio <= 100);
// todos los platillos son menores o iguales a 100?

console.log(validacion2);


