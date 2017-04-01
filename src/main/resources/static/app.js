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

function direccionamiento(){
    //var tipo = document.getElementById("#profesor").value;
    //console.log("hola"+tipo);
    console.log("no");
    location.href = "profesor.html";
    alert("pas");
    location.href = "profesor.html";
}


$(document).ready(
        function () {
            connect();
            console.info('connecting to websockets');

        }
);
