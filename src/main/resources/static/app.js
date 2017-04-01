var stompClient = null;

function connect() {
    var socket = new SockJS('/stompendpoint');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);

        stompClient.subscribe('/topic/TOPICOXX', function (data) {


        });
    });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

direccionamiento = function () {
    //var tipo = document.getElementById("#profesor").value;
    //console.log("hola"+tipo);
    if (document.getElementById("tipop").value == "1") {

    } else
        location.href = "profesor.html";
};

datosProfesor = function () {

    Nombre = document.getElementById("nombre").value;
    TI = document.getElementById("nti").value;
    Carnet = document.getElementById("carnet").value;
    Correo = document.getElementById("correo").value;
    console.log("Holaaa");

};



$(document).ready(
        function () {
            connect();
            console.info('connecting to websockets');

        }
);
