import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {AngularFire,FirebaseListObservable}  from 'angularfire2';

/*
  Generated class for the UserProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {

players : FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, angularfire:AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

}
