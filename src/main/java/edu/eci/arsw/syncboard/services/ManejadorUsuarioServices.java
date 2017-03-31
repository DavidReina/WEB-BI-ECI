/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.syncboard.services;

import edu.eci.arsw.syncboard.model.Correo;
import edu.eci.arsw.syncboard.model.Profesor;
import edu.eci.arsw.syncboard.model.Usuario;
import static java.util.Collections.list;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.LinkedList;

/**
 *
 * @author 2103216
 */
@Service
public class ManejadorUsuarioServices {
    List<Usuario> empl=new LinkedList<>();
    List<Usuario> estu=new LinkedList<>();
 
    public void RegistrarUsuario(String nombre ,String clave, String tipo, long cc, String ctipo, int carn, Correo cor){
        Usuario us = null;
        if(tipo=="Profesor"){
            us=new Profesor(carn, cor);
            
        }else{
            //us=new Estudiante(carn, cor);
        }
        ingresoUsuario(us);
    }
    
    public void ingresoUsuario(Usuario user){
        empl.add(user);
    }
    
    public Usuario getUsuario(int cedula){
        Usuario u = null;
        for(int x=0; x<=empl.size();x++){
            if(empl.get(x).cedula_numero==cedula){
                u=empl.get(x);
                
            }
        }
        
        return u;
    }
    
    
}
