/**
 * Created by jmccommas on 7/4/17.
 */
export  class Message{
    content: string;
    username: string;
    messageId?:string;
    userId?: string;
    constructor(content:string,username:string,messageId?:string,userId?: string){
       this.content=content;
        this.username= username;
        this.messageId= messageId;
        this.userId= userId;

    }
}