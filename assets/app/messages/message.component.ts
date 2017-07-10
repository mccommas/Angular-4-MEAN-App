/**
 * Created by jmccommas on 7/4/17.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Message} from "./message.model";
import {MessageService} from '../messages/message.service';
@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService) {}

    onEdit() {
        this.editClicked.emit('A new value');
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}
