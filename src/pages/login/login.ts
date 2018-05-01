import { Component,ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
body : any;
localstorage : any;
homeee : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public element: ElementRef,
 private _auth: AuthService,public storage: Storage) {
this. homeee = HomePage;
  this.body = this.element.nativeElement;
  this.localstorage = storage;
  }


  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    let name = this._auth.displayName();
    console.log("Facebook display name ",name);
     this.localstorage.set('name', name);
     this.navCtrl.setRoot(this.homeee);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



}
