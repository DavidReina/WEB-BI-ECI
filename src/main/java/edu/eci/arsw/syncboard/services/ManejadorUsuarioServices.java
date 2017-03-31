/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.syncboard.services;

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
 
    public void RegistrarUsuario(String nombre ,String clave, String tipo, long cc, String ctipo){
        Usuario u;
        if(tipo=="Profesor"){
            //u=new Profesor(null);
        }
        
        
    } 
}
