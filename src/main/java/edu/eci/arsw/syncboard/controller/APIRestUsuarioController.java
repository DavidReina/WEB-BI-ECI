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
import org.springframework.web.bind.annotation.RequestBody;
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

    @RequestMapping(value = "/AgregarUsuario", method = RequestMethod.PUT)
    public ResponseEntity<?> AgregarUsuario(@RequestBody Usuario user) {
        try {
            //registrar dato
            manejador.ingresoUsuario(user);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(APIRestUsuarioController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error bla bla bla", HttpStatus.FORBIDDEN);
        }
    }

    @RequestMapping(value = "/getUsuario", method = RequestMethod.GET)
    public ResponseEntity<?> getUsuarios() {


        return new ResponseEntity<>(manejador.getUsuarios(), HttpStatus.ACCEPTED);

    }

}
