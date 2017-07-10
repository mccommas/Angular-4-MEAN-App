/**
 * Created by jmccommas on 7/7/17.
 */
import {Injectable,Response,Headers} from '@angular/core';
import {Message} from './message.model'
import {Http, } from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService {
    private messages: Message[] = [];
    constructor(private http:Http){}

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, 'Dummy', result.obj._id, null);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}