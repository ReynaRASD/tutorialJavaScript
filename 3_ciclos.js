"use strict"
// CICLOS DEFINIDOS: for
// CICLOS INDEFINIDOS: do while

var productos = 5;


// for
/*
for (let contador = 0; contador < productos; contador ++){
console.log("Contador: " + contador);
debugger;  //en fuente en vez de consola y vez las iteraciones
}
*/





// while
/*
while (productos > 0){
    console.log("Producto vendido " + productos);
    productos--;
    debugger;
}
*/



// do
/*
do {
    console.log('Producto vendido');
    productos--;
    debugger;
}while(productos>=1)
*/

// CONTROL DE CICLOS
// break y continue
var contador = 0;
var cuenta = 0;

for (contador = 0; contador <= 20; contador ++){
    if(contador== 5){
        break;
    }

    if(contador % 2 == 0){
        continue; //atajo hacia el siguiente paso
    }
    cuenta ++;
    //debugger;
}

console.log("Hay " +  cuenta + " numeros impares.");

///****************** */

var y = 5;
var texto = "";

do{
    for (let x = 0; x < y; x++) {
        texto = texto + "*";
    }
    console.log(texto)
    texto = "";
    y--;
} 
while (y>0);