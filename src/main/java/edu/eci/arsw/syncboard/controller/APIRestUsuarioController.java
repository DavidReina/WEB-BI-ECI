/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.syncboard.controller;

import edu.eci.arsw.syncboard.model.Usuario;
import edu.eci.arsw.syncboard.services.ManejadorUsuarioServices;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author 2103216
 */
@RestController
@RequestMapping(value = "/Usuario")
public class APIRestUsuarioController {

    @Autowired
    ManejadorUsuarioServices manejador;

    @RequestMapping(value="/Usuario",method = RequestMethod.GET)
    public ResponseEntity<?> RegistrarUsuario() {
        try {
            //obtener datos que se enviarán a través del API

            return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(APIRestUsuarioController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error bla bla bla", HttpStatus.NOT_FOUND);
        }
    }
    
    @RequestMapping(value="/{cedula}",method = RequestMethod.GET)
    public ResponseEntity<?> getUsuario() {
            //Usuario u= manejador.
            //obtener datos que se enviarán a través del API

            return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
        }
    

}
