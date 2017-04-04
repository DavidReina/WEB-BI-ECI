/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.syncboard.model;

/**
 *
 * @author 2103216
 */
public class Clase {
    private String NombreClase;
    private long DescripcionClase;

    public String getNombreClase() {
        return NombreClase;
    }

    public void setNombreClase(String NombreClase) {
        this.NombreClase = NombreClase;
    }

    public long getDescripcionClase() {
        return DescripcionClase;
    }

    public void setDescripcionClase(long DescripcionClase) {
        this.DescripcionClase = DescripcionClase;
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
    
}
