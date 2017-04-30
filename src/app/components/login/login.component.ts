import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( private _ls:LoginService ) { }

  ngOnInit() {
  }

  login( account:string ) {
    this._ls.login( account)
  }

}
