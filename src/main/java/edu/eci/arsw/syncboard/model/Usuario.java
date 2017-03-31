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
public class Usuario {
    private String nombre;
    private String clave;
    //tipo de usuario si es Profesor o Estudiante
    private String tipo;
    private long cedula_numero;
    private String cedula_tipo;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public long getCedula_numero() {
        return cedula_numero;
    }

    public void setCedula_numero(long cedula_numero) {
        this.cedula_numero = cedula_numero;
    }

    public String getCedula_tipo() {
        return cedula_tipo;
    }

    public void setCedula_tipo(String cedula_tipo) {
        this.cedula_tipo = cedula_tipo;
    }
    
    
}
