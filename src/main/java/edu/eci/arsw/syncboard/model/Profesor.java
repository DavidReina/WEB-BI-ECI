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
public class Profesor extends Usuario{
    
    private List<Correo> CorreoProfesores;
    private int carnet;
    
    public Profesor(int carn, Correo cor){
        this.carnet = carn;
        this.CorreoProfesores.add(cor);
        
    }

    public List<Correo> getCorreoProfesores() {
        return CorreoProfesores;
    }

    public void setCorreoProfesores(List<Correo> CorreoProfesores) {
        this.CorreoProfesores = CorreoProfesores;
    }

    public int getCarnet() {
        return carnet;
    }

    public void setCarnet(int carnet) {
        this.carnet = carnet;
    }
    
    
}
