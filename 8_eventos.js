"use strict"

// Evento de carga de la pagina

const video = document.querySelector('.botonVideo');

video.addEventListener("play", function(){
    let email = prompt("Escribe tu correo.", "data@info.com");
    //ventana para pedir datos tipo alert
    console.log(email);
    console.log('El video ha iniciado');
});

video.addEventListener("seeking", function(){
    console.log('Se esta buscando en el video', this.currentTime);
});


video.addEventListener("ended", function(){
    console.log('El video ha terminado');
    let resultado = confirm("Deseas repetirlo?");
    // confirm arroja un boolean
    console.log(resultado);
    if(resultado==true){
        video.play();
    }else{
        window.location = "http://www.google.com";
    }
});
