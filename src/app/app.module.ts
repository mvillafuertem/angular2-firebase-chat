import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';

// Components
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

// Services
import { ChatService } from './services/chat/chat.service';
import { LoginService } from './services/login/login.service'

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp( firebaseConfig )
  ],
  providers: [
    ChatService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
