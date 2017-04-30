import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { ChatService } from '../chat/chat.service';

@Injectable()
export class LoginService {

  constructor( private af: AngularFire,
               private cs: ChatService ) { }

  login( account:string ) {
    let provider;

    if (account == 'google'){
      provider = AuthProviders.Google
    }else{
      provider = AuthProviders.Twitter
    }
    this.af.auth.login({
      provider: provider,
      method: AuthMethods.Popup,
    }).then( data => {
      this.cs.user = data;
      localStorage.setItem('user', JSON.stringify(data))
    })

  }

  logout() {
    localStorage.removeItem('user')
    this.cs.user = null;
    this.af.auth.logout();
  }

}
