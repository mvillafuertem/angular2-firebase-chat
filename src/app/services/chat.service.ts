import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.chats = af.database.list('')
  }
}
