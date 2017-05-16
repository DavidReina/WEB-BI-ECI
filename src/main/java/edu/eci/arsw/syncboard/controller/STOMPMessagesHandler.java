/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.syncboard.controller;

import java.awt.Point;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

/**
 *
 * @author 2103216
 */
@Controller
public class STOMPMessagesHandler {

    @Autowired
    SimpMessagingTemplate msgt;
    private int npoints = 0;
    List<Point> PointsPolygon = new ArrayList<>();

    @MessageMapping("/newpoint")
    public void getLine(Point pt) throws Exception {
        //System.out.println("Nuevo punto recibido en el servidor!:" + pt);
        msgt.convertAndSend("/topic/newpoint", pt);
        PointsPolygon.add(pt);
        //System.out.println("hygththttuyt");

    }

    @MessageMapping("/newdibujo.{nclase}")
    public void handleBaz(@DestinationVariable String nclase, Point pt) {
        synchronized (this) {
            msgt.convertAndSend("/topic/newdibujo." + nclase, pt);
            PointsPolygon.add(pt);
        }

    }

}
