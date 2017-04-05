/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var miLienzo; // el canvas
var contexto; // el contexto
var canvasLimites; // los margenes del canvas
var flagPaint=false; // nos dice si pintar o no
var actualPos; // la posición actual donde hice click

prepareCanvas =function (){
miLienzo=document.getElementById("canvasEjemplo");
contexto= miLienzo.getContext("2d"); // obtenemos el contexto ( dibujar en 2d)
canvasLimites=miLienzo.getBoundingClientRect(); // obtenemos los limites del canvas
miLienzo.addEventListener('mousedown',cambiarEstado,false);
miLienzo.addEventListener('mouseup',cambiarEstado,false);
miLienzo.addEventListener('mousemove',pintarLinea,false);
miLienzo.style.cursor="hand";

borrador=document.getElementById("borrador");
borrador.addEventListener('click',erase,false);
}

cambiarEstado= function (){
flagPaint=!flagPaint;
actualPos=obtenerCoordenadas(event);
}

pintarLinea = function (event){
if(flagPaint){
var coordenadas=obtenerCoordenadas(event);
contexto.beginPath(); // comenzamos a dibujar
contexto.moveTo(actualPos.x, actualPos.y); // ubicamos el cursor en la posicion (10,10)
contexto.lineTo(coordenadas.x,coordenadas.y);
actualPos={
x:coordenadas.x,
y:coordenadas.y
};
contexto.strokeStyle = "#000"; // color de la linea
contexto.stroke(); // dibujamos la linea
}
}

obtenerCoordenadas= function (event){
var posX;
var posY;

if (event.pageX || event.pageY) {
posX = event.pageX- canvasLimites.left;
posY = event.pageY- canvasLimites.top;
}
else {
posX = event.clientX - canvasLimites.left;
posY = event.clientY - canvasLimites.top;
}

return {x:posX,
y:posY
};
}

erase = function (){
contexto.clearRect(0, 0, miLienzo.width, miLienzo.height);
}






            
            