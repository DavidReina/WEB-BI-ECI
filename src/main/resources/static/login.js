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
                if (data[x].tipo == "Estudiante") {
                    location.href = "EntradaEstudiante.html";
                } else
                    location.href = "VistaProfesor.html";
            }
        }
        if (!existe) {
            alert("Correo o Contraseña incorrecta");
        }
    });
};


MisCursos = function () {
    location.href = "MisClases.html";
};

BuscarCurso = function () {
    location.href = "VistaEstudiante.html";
};

verMisCursos = function () {
    $.get("/Usuario/getUserActual", function (user) {
        $.get("/Usuario/getClases", function (data) {

            var cadena = "<select name='MC' id='MC' class='MC'><option selected value='0'> Mis Clases </option>";
            for (x in data) {
                var s = user.substr(1, user.length - 2);
                for (k in data[x].Estudiantes) {
                    if (s == data[x].Estudiantes[k]) {
                        cadena = cadena + "<option value='" + data[x].NombreClase + "'>" + data[x].NombreClase + "</option>";
                    }
                }

            }
            cadena = cadena + "</select>";
            $("#MC").replaceWith(cadena);
        });
    });

};

ingresarEstudiante = function () {

    var carnet = document.getElementById("UserNamelogin").value;
    var pass = document.getElementById("Passwodlogin").value;
    var existe = false;

    $.ajax({
        url: "/Usuario/usuarioActual",
        type: 'PUT',
        data: JSON.stringify(carnet),
        contentType: "application/json"
    });

    $.get("/Usuario/getCorreo", function (data) {

        for (x in data) {
            if (data[x].carnet == carnet && data[x].pass == pass) {
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
    location.href = "RegistroClase.html";
};

registrarClase = function () {



    var nclase = document.getElementById("nameClass").value;
    var descripcion = document.getElementById("descripcion").value;

    $.get("/Usuario/getUserActual", function (data) {

        var clase = {
            "NomUsuario": data,
            "NombreClase": nclase,
            "DescripcionClase": descripcion,
            "Estudiantes": []
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


misClasesE = function () {

    $.get("/Usuario/getClases", function (data) {
        var cadena = "<select name='MC' id='MC' class='MC'><option selected value='0'> Cursos Disponibles </option>";
        for (x in data) {
            cadena = cadena + "<option value='" + data[x].NombreClase + "'>" + data[x].NombreClase + "</option>";
        }
        cadena = cadena + "</select>";
        $("#MC").replaceWith(cadena);
    });

};


claseSeleccionada = function () {

    var p = document.getElementById("MC").value;
    if (p == 0) {
        alert("Seleccione una de las opciones");
    } else {
        location.href = "ClaseP.html";
    }
    console.log(p);

    $.ajax({
        url: "/Usuario/claseActual",
        type: 'PUT',
        data: JSON.stringify(p),
        contentType: "application/json"
    });
};

entrarClase = function (){
    location.href = "ClaseE.html";
};

claseSeleccionadaE = function () {

    var p = document.getElementById("MC").value;
    $.get("/Usuario/getUserActual", function (user) {

        alert("Se ha registrado correctamente a la clase " + p);
        location.href = "EntradaEstudiante.html";

        if (p == 0) {
            alert("Seleccione una de las opciones");
        } else {

            var promesa = $.ajax({
                url: "/Usuario/claseActual",
                type: 'PUT',
                data: JSON.stringify(p),
                contentType: "application/json"
            });

            promesa.then(
                    function () {
                        $.ajax({
                            url: "/Usuario/"+p,
                            type: 'PUT',
                            data: JSON.stringify(user),
                            contentType: "application/json"
                        });
                    },
                    function () {
                        alert("NO");
                    }
            );
        }
    });
};


detalles = function () {

    var p = document.getElementById("MC").value;
    if (p == 0) {
        alert("Seleccione una de las opciones");
    } else {

        $.get("/Usuario/getClases", function (data) {
            for (x in data) {
                if (data[x].NombreClase == p) {
                    var nomx = data[x].NomUsuario;
                    var s = nomx.substr(1, nomx.length - 2);

                    var detalle = "Profesor: " + s;
                    detalle = detalle + "\nDetalles: " + data[x].DescripcionClase;
                    alert(detalle);
                }
            }
        });
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

