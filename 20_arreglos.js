"use strict"

///// ITERACION DE ARREGLOS

/// **************   BUSCAR EN ARREGLOS
//******  for in

var platillos = ["ceviche", "tacos", "pasta"];

for(let platillo in platillos){
    console.log(platillo);
    console.log(platillos[platillo]);
}

// ***** for each

platillos.forEach(platillo => console.log(platillo));

platillos.forEach((platillo, index) => console.log(index, platillo) );
//en este ultimo es importante el orden, primero va el elemento y despues el indice de la posicion, despues de la flecha no importa el orden

var elegido = platillos.find(platillo => platillo == "pasta");

//find te manda todo lo que encuentra en esa posicion

console.log(elegido);

//EXAMPLE COMPLEX

var menu = [
    {nombre: 'pasta', precio: '30', pais: 'Peru'}, 
    {nombre: 'tacos', precio: '50', pais: 'Mexico'}, 
    {nombre: 'tamales', precio: '60', pais: 'Canada'}
];

var elegido2 = menu.find(platillo => platillo.nombre == "tamales");
console.log(elegido2);

var elegido3= platillos.findIndex(platillo => platillo == "tacos");
console.log(elegido3);

var elegido4 = menu. findIndex(platillo => platillo.nombre == "pasta");
console.log(elegido4);



