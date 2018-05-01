import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { GamePage } from '../pages/game/game';
import { HomePage } from '../pages/home/home';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { ChatPage } from '../pages/chat/chat';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { AuthService } from '../providers/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;

  pages: Array<{title: string, component: any ,icon :string}>;

  constructor(public platform: Platform,public storage: Storage,private _auth: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'איצטדיון', component: HomePage, icon : 'football' },
      { title: 'משחק', component: HomePage,icon : 'football' },
      { title: 'כרטיס שחקן', component: UserProfilePage ,icon : 'chatbubbles'},
      { title: 'צאט', component: ChatPage ,icon : 'menu'},
      { title: 'הנהלה', component: GamePage ,icon : 'add'}
    ];


      storage.ready().then(() => {

          // storage.remove('name').then((val) => {
          //   console.log('removed', val);
          // })


       storage.get('name').then((val) => {
          console.log(val);

         if(val == null && val == undefined)
         {
           this.rootPage = LoginPage;
         }
         else
         {
            this.rootPage = HomePage;
         }
          
            
       }).catch((e)=> { console.log(e);})
     });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  signout():void {
    this._auth.signOut();
    this.nav.setRoot(LoginPage);

    this.storage.remove('name').then((val) => {
      console.log('removed', val);
    })
  }
}
