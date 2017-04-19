/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var stompClient = null;
var x = 0;
var y = 0;
var canvas;
var context;
var canvasLimites; // los margenes del canvas
var flagPaint = false; // nos dice si pintar o no
var actualPos; // la posición actual donde hice click


prepareCanvas = function () {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d"); // obtenemos el contexto ( dibujar en 2d)
    canvasLimites = canvas.getBoundingClientRect(); // obtenemos los limites del canvas
    canvas.addEventListener('mousedown', cambiarEstado, false);
    canvas.addEventListener('mouseup', cambiarEstado, false);
    canvas.addEventListener('mousemove', pintarLinea, false);

    canvas.style.cursor = "hand";


};

cambiarEstado = function () {
    flagPaint = !flagPaint;
    actualPos = obtenerCoordenadas(event);
};

irClase = function () {
    location.href = "ClaseE.html";
};
pintarLinea = function (event) {
    if (flagPaint) {
        var coordenadas = obtenerCoordenadas(event);
        ctx.beginPath(); // comenzamos a dibujar
        ctx.moveTo(actualPos.x, actualPos.y); // ubicamos el cursor en la posicion (10,10)
        ctx.lineTo(coordenadas.x, coordenadas.y);
        actualPos = {
            x: coordenadas.x,
            y: coordenadas.y
        };
        ctx.strokeStyle = "#000"; // color de la linea
        ctx.stroke(); // dibujamos la linea
    }
};
obtenerCoordenadas = function (event) {
    var posX;
    var posY;

    if (event.pageX || event.pageY) {
        posX = event.pageX - canvasLimites.left;
        posY = event.pageY - canvasLimites.top;
    } else {
        posX = event.clientX - canvasLimites.left;
        posY = event.clientY - canvasLimites.top;
    }

    return {x: posX,
        y: posY
    };
};

erase = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
};
erase1 = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function connect() {
    var socket = new SockJS('/stompendpoint');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);

        stompClient.subscribe('/topic/newpoint', function (data) {

            theObject = JSON.parse(data.body);
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(theObject["x"], theObject["y"], 1, 0, 2 * Math.PI);

            ctx.stroke();


        });



    });
}
sendPoint = function () {
    stompClient.send("/app/newpoint", {}, JSON.stringify({x: x, y: y}));
};
function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


description = function () {
    $.get("/Usuario/getClaseActual", function (clase) {
        $.get("/Usuario/getClases", function (data) {

            for (x in data) {

                var s = clase.substr(1, clase.length - 2);

                if (data[x].NombreClase == s) {
                    alert(data[x].DescripcionClase);
                }
            }

        });
    });
};


$(document).ready(
        function () {
            connect();
            console.info('connecting to websockets');
            canvas = document.getElementById('myCanvas');
            context = canvas.getContext('2d');

            canvas.addEventListener('mousemove', function (evt) {
                var mousePos = getMousePos(canvas, evt);
                x = mousePos.x;
                y = mousePos.y;
                sendPoint();

                //stompClient.send("/app/newpoint", {}, JSON.stringify({x: x, y: y}));
                var mensaje = 'Position' + mousePos.x + mousePos.y;

            }, false);
        }
);
