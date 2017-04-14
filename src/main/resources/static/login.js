/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


ingresar = function () {

    var email = document.getElementById("UserNamelogin").value;
    var pass = document.getElementById("Passwodlogin").value;
    var existe = false;

    $.ajax({
        url: "/Usuario/usuarioActual",
        type: 'PUT',
        data: JSON.stringify(email),
        contentType: "application/json"
    });

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

VistaClase = function () {
    location.href = "Clase.html";
};

registrarClase = function () {



    var nclase = document.getElementById("nameClass").value;
    var descripcion = document.getElementById("descripcion").value;

    $.get("/Usuario/getUserActual", function (data) {

        var clase = {
            "NomUsuario": data,
            "NombreClase": nclase,
            "DescripcionClase": descripcion
        };

        $.ajax({
            url: "/Usuario/agregarClase",
            type: 'PUT',
            data: JSON.stringify(clase),
            contentType: "application/json"
        });
    });

    alert("Su clase ha sido registrada");
    location.href = "VistaProfesor.html";
};

misClases = function () {
    $.get("/Usuario/getUserActual", function (user) {
        $.get("/Usuario/getClases", function (data) {
            var cadena = "<select name='MC' id='MC' class='MC'><option selected value='0'> Mis Clases </option>";
            for (x in data) {
                if (data[x].NomUsuario == user) {
                    cadena = cadena + "<option value='" + data[x].NombreClase + "'>" + data[x].NombreClase + "</option>";
                }
            }
            cadena = cadena + "</select>";
            $("#MC").replaceWith(cadena);
        });
    });
};

claseSeleccionada = function () {
    
    var p = document.getElementById("MC").value;
    if(p==0){
        alert("Seleccione una de las opciones");
    }
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

