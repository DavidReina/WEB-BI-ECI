/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.syncboard.model;

import java.util.List;

/**
 *
 * @author 2103216
 */
public class Profesor extends Usuario {

    private int carnet;

    public Profesor(String nombre, String tipo, long cedula_numero, String cedula_tipo, Integer carnet, String correo, String pass) {
        super(nombre, tipo, cedula_numero, cedula_tipo, carnet, correo, pass);
        this.carnet = carnet;

    }


}
