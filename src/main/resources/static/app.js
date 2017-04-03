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

    var nombre = document.getElementById("nombre").value;
    var ti = document.getElementById("TC").value;
    var nti = document.getElementById("nti").value;
    var carnet = document.getElementById("carnet").value;
    var correo = document.getElementById("correo").value;

/*
    $.ajax({
        url: "/Usuario",
        type: 'PUT',
        data: JSON.stringify(user),
        contentType: "application/json"
    });
     */
};



$(document).ready(
        function () {
            connect();
            console.info('connecting to websockets');

        }
);
