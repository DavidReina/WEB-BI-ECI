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
public class Correo {  
    private String correo;
    private long cedula_numero;
    private String cedula_tipo;
    
    public Correo(){
    }
    
    /**
    * Constructor Clase CorreoPersonal
    * Que representa el correo de una persona
     * @param correo correo
     * @param cedula cedula
     * @param tipo tipo
    */
    public Correo(String correo, long cedula, String tipo){
        this.correo=correo;
        this.cedula_numero=cedula;
        this.cedula_tipo=tipo;
    }

    /**
     * @return the correo
     */
    public String getCorreo() {
        return correo;
    }

    /**
     * @param correo the correo to set
     */
    public void setCorreo(String correo) {
        this.correo = correo;
    }

    /**
     * @return the cedula_Numero
     */
    public long getCedula_numero() {
        return cedula_numero;
    }

    /**
     * @param cedula_Numero the cedula_Numero to set
     */
    public void setCedula_numero(long cedula_Numero) {
        this.cedula_numero = cedula_Numero;
    }

    /**
     * @return the cedula_tipo
     */
    public String getCedula_tipo() {
        return cedula_tipo;
    }

    /**
     * @param cedula_tipo the cedula_tipo to set
     */
    public void setCedula_tipo(String cedula_tipo) {
        this.cedula_tipo = cedula_tipo;
    }
    
}
