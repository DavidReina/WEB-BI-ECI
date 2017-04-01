/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.syncboard.model;

import edu.eci.arsw.syncboard.javamail.core.Email;
import edu.eci.arsw.syncboard.javamail.core.EmailConfiguration;
import edu.eci.arsw.syncboard.javamail.core.EmailSender;
import edu.eci.arsw.syncboard.javamail.core.SimpleEmail;
import edu.eci.arsw.syncboard.javamail.core.SimpleEmailSender;
import javax.mail.MessagingException;



/**
 *
 * @author 2103216
 */
public class SendEmail implements SendInformation{

    @Override
    public void sendInfoPlayer(String res) {
        final String from = "me@gmail.com";
        final String to = "test@gmail.com";
        final String subject = "test";
        final String message = res;

        Email email = new SimpleEmail(from, to, subject, message);
        EmailSender sender = new SimpleEmailSender(new EmailConfiguration());
        try {
            sender.send(email);
            System.out.println("Sent message successfully!");
        } catch (MessagingException e) {
            System.err.println("Message not sent!");
            e.printStackTrace();
        }
        
    }
    
}
