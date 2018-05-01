import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire,FirebaseListObservable}  from 'angularfire2'


/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  game: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, angularfire:AngularFire) {

    this.game = angularfire.database.list('/game')
    console.log(this.game);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
