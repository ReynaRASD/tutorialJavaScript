"use strict"

var platillos = ["tacos", "tamales", "hamburguesas"];

var bebidas = new Array("refreco", "aguas", "cafe");

////  ****   MULTIDIMENSIONALES

var menu = [platillos, bebidas];
console.log(menu);
console.log(menu[0][0]);
console.log(menu[1][0]);

var sopas = ["spaguetti", "caldo", "codito"];
menu.push(sopas);

console.log(menu);

menu.pop(); //elimina el ultimo elemento
console.log(menu);

menu.join();
//une todo en una cadena de texto

