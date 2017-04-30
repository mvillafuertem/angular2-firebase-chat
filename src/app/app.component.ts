import { Component } from '@angular/core';
import { ChatService } from './services/chat/chat.service';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public _cs:ChatService,
               public _ls:LoginService ) {

  }
}
