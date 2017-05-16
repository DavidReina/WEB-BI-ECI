/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.syncboard.model;

import java.util.LinkedList;
import java.util.List;

/**
 *
 * @author 2103216
 */
public class Clase {
    
    public String NomUsuario;
    public String NombreClase;
    public String DescripcionClase;
    public List<String> Estudiantes;

    public List<String> getEstudiantes() {
        return Estudiantes;
    }

    public void setEstudiantes(String x) {
        this.Estudiantes.add(x);
    }
    
    public String getNomUsuario() {
        return NomUsuario;
    }

    public void setNomUsuario(String NomUsuario) {
        this.NomUsuario = NomUsuario;
    }

    public String getNombreClase() {
        return NombreClase;
    }

    public void setNombreClase(String NombreClase) {
        this.NombreClase = NombreClase;
    }

    public String getDescripcionClase() {
        return DescripcionClase;
    }

    public void setDescripcionClase(String DescripcionClase) {
        this.DescripcionClase = DescripcionClase;
    }
    
}
 /*
    Ayuda CANVAS:
    <body onmousemove="pintar(event)" style="margin:0;padding:0;">
<canvas id="canvas" width="900" height="600" style="border:#000 solid 1px;">
<p>Su navegador no soporta HTML5</p>
</canvas>

<script type="text/javascript">
     var canvas = document.getElementById("canvas");
     var ctx = canvas.getContext("2d");
     ctx.fillStyle = "#000";
     ctx.fillRect (0, 0, 900, 600);
	 var posx = 0;
	 var posy = 0;

	function pintar(e){
		posx = e.clientX;
    	posy = e.clientY;
    	ctx.fillStyle = "#FFF";
    	ctx.fillRect (posx, posy, 3, 3);
	}
    


</script>
    */


