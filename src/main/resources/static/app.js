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
        location.href = "VistaEstudiante.html";

    } else
        location.href = "Registroprofesor.html";
};

VistaProfesor = function () {
    location.href = "VistaProfesor.html";
};

VistaClase = function () {
    location.href = "Clase.html";
};

Registro = function() {
    location.href = "Login.html"
}

datosProfesor = function () {



    var nombre = document.getElementById("nombre").value;
    var ti = document.getElementById("TC").value;
    var nti = parseInt(document.getElementById("nti").value);
    var carnet = parseInt(document.getElementById("carnet").value);
    var correo = document.getElementById("correo").value;

    if (nombre == "" || ti == "" || nti == "" || carnet == "" || correo == "") {
        alert("Algunos de los campos esta vacios");
    } else {

        //console.log(nombre + " Profesor " + nti, ti, carnet, correo);

        var user = {
            "nombre": nombre,
            "tipo": "Profesor",
            "numeroDeDocuemnto": nti,
            "tipoDeDocumento": ti,
            "carnet": carnet,
            "correo": correo
        };


        $.ajax({
            url: "/Usuario/AgregarUsuario",
            type: 'PUT',
            data: JSON.stringify(user),
            contentType: "application/json"
        });
        alert("Sus datos han sido Registrados   " + nombre + " en unos Momentos Enviaremos un correo indicado su usuario y contraseña");
        location.href = "index.html";
    }
};

getProfesor = function () {


    $.get("/Usuario/getUsuario", function (data) {

        for (x in data) {
            if (x.carnet == document.getElementById("busprofe").value) {
                var profe = x;
            }
        }
        //console.log(profe);
    });
};

registrarClase = function () {

    alert("Su clase clase registrada");
    location.href = "Clase.html";

}

$(document).ready(
        function () {
            connect();
            console.info('connecting to websockets');

        }
);
