import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  message:string = "";
    div:any

    constructor( public _cs:ChatService) {
      this._cs.loadMessage()
              .subscribe( () => {
                console.log("Messages loaded!")

                setTimeout ( ()=> this.div.scrollTop = this.div.scrollHeight, 50 )

              })
    }

    send() {
      if( this.message.length == 0) {
        return;
      }
      this._cs.addMessage ( this.message)
              .then( () => console.log("Delivered!") )
              .catch ( (error) => console.error(error))
      this.message = ""
    }

    ngOnInit() {
      this.div = document.getElementById("app-messages")
      console.log( this.div )
    }

}
