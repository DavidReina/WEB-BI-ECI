/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


ingresar = function () {

    var email = document.getElementById("UserNamelogin").value;
    var pass = document.getElementById("Passwodlogin").value;
    var existe = false;

    $.get("/Usuario/getCorreo", function (data) {

        for (x in data) {
            if (data[x].correo == email && data[x].pass == pass) {
                existe = true;
                location.href = "VistaProfesor.html";
            }
        }
        if (!existe) {
            alert("Correo o Contraseña incorrecta");
        }
    });
};


$(document).ready(function () {
    $('.log-btn').click(function () {
        $('.log-status').addClass('wrong-entry');
        $('.alert').fadeIn(500);
        setTimeout("$('.alert').fadeOut(1500);", 3000);
    });
    $('.form-control').keypress(function () {
        $('.log-status').removeClass('wrong-entry');
    });

});

