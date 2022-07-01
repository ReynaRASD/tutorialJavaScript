"use strict"

/*
  
 *La lista de materiales (Object Model Browser) se compone de los objetos navigator, 
 *history, screen, locationy documentque son hijos de window. 
 
 *En el documentnodo está el DOM (Document Object Model), 
 *el modelo de objeto de documento, que representa el contenido de la página. 
 *Puedes manipularlo usando javascript.

 */

 var boton = document.getElementById('boton');
 boton.addEventListener('click', ()=>{
    
    boton.style.backgroundColor='green';
    boton.style.color='white';
    boton.style.width='200px';

    
 });

 var todosLosParrafos = document.getElementsByTagName('p');
 console.log(todosLosParrafos);

 var parrafoPorClase = document.getElementsByClassName('principal')[0].innerHTML;
 console.log(parrafoPorClase);

 var foto = document.createElement('img');
 foto.src = 'foto.jpg';
 foto.name = 'foto';
 foto.width = '200';
 foto.height = '250';
 document.body.appendChild(foto);




