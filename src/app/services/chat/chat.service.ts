import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Message } from '../../interfaces/message.interface';

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;
  user:any = {
    name: "Miguel"
  }
  
  constructor(private af: AngularFire) { }

  // Carga los mensajes de la base de datos
  loadMessage(){
    this.chats = this.af.database.list('/chats', {
      query: {
        limitToLast: 20,
        orderByKey: true,
      }
    })
    return this.chats
  }

  // Añade los mensajes a la base de datos
  addMessage( text:string ) {
    let message:Message = {
      name: "Miguel",
      message: text
    }
    return this.chats.push( message );
  }
}
