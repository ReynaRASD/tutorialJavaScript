"use strict"

var mensaje = "ceviche, tacos, pasta";

var platillos = mensaje.split(", ");

console.log(platillos);

// ---- Array.from();
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'));
console.log(platillosHTML);

var platillos2 = platillosHTML.map(platillo => platillo.textContent);
console.log(platillos2);


// ----- Array.of();
var platillos3 = Array.of("ceviche", "tacos", "pasta");
console.log(platillos3);
