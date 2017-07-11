var stompClient = null;


RedireccionamientoPagDef = function () {
    location.href = "DefinicionProblema.html";
};

RedireccionamientoInicio = function () {
    location.href = "index.html";
};

$(document).ready(
        function () {
            connect();
            console.info('connecting to websockets');
        }
);
