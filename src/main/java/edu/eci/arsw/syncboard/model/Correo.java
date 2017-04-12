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
    private String tipo;
    private String pass;
    
    public Correo(){
    }
    
    /**
    * Constructor Clase CorreoPersonal
    * Que representa el correo de una persona
     * @param correo correo
     * @param tipo tipo
     * @param pass pass
    */
    public Correo(String correo, String tipo, String pass){
        this.correo=correo;
        this.tipo=tipo;
        this.pass=pass;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

}
