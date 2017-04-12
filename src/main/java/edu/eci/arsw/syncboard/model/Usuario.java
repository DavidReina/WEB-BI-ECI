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

    public Usuario() {
    }

    public Usuario(String nombre, String tipo, long cedula_numero, String cedula_tipo, Integer carnet, String correo, String pass) {
        
        this.nombre = nombre;
        this.tipo = tipo;
        this.cedula_numero = cedula_numero;
        this.cedula_tipo = cedula_tipo;
        this.carnet = carnet;
        this.correo = correo;
        this.pass = pass;
    }

    
    public String nombre;
    public String tipo;
    public long cedula_numero;
    public String cedula_tipo;
    public Integer carnet;
    public String correo;
    public String pass;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
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

    public Integer getCarnet() {
        return carnet;
    }

    public void setCarnet(Integer carnet) {
        this.carnet = carnet;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
    
    
    
}
