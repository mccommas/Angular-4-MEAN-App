/**
 * Created by jmccommas on 7/5/17.
 */

import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service'
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";

@Component({
 selector: 'app-message-input',
 templateUrl: 'message-input.component.html',
})

export class MessageInputComponent implements OnInit {
 constructor(private messageService:MessageService) { }
 onSubmit(form:NgForm){
const  message= new Message(form.value.content,'Jeffrey');
this.messageService.addMessage(message)
  form.resetForm();
 }

 ngOnInit() {

 }
}