import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GamePage } from '../pages/game/game';
import { HomePage } from '../pages/home/home';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { ChatPage } from '../pages/chat/chat';
import { LoginPage } from '../pages/login/login';
import {ChatTextBoxComponent } from "../components/chat-text-box/chat-text-box"
import {AngularFireModule} from 'angularfire2';
import { AuthService } from '../providers/auth-service';
import { IonicStorageModule } from '@ionic/storage';

// npm install ionic -g
// npm install cordova -g
// npm install typescripts -g
// npm install @ionic/app-scripts@latest --save-dev
// npm install @types/request@0.0.30 --save-dev --save-exact
// npm install firebase angularfire2 --save



export const firebaseConfig = {
    apiKey: "AIzaSyD4RhaGgBsTJAMxFZCdJe3GPDVHeCEs94s",
    authDomain: "footballapp-66ccc.firebaseapp.com",
    databaseURL: "https://footballapp-66ccc.firebaseio.com",
    storageBucket: "footballapp-66ccc.appspot.com",
    messagingSenderId: "785933143634"
}



@NgModule({
  declarations: [
    MyApp,
    GamePage,
    HomePage,
    UserProfilePage,
    ChatPage,
    ChatTextBoxComponent,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    HomePage,
    UserProfilePage,
    ChatPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AuthService]
})
export class AppModule {}
