/**
 * Created by jmccommas on 7/5/17.
 */
import { Component, OnInit } from '@angular/core';
import {Message} from "../messages/message.model";
import {MessageService} from '../messages/message.service';


@Component({
 selector: 'app-message-list',
 templateUrl: 'message-list.component.html',

})

export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                }
            );
    }
}