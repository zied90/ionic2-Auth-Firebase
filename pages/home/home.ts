import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{FirebaseService}  from '../../providers/firebase-service'
import{FirebaseListObservable} from 'angularfire2/database'
import{GooglePlus} from '@ionic-native/google-plus';

import firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingItems:FirebaseListObservable<any[]>
 newItem='';
  constructor(public navCtrl: NavController ,public firebaseService:FirebaseService, public googlePlus:GooglePlus) {
this.shoppingItems=this.firebaseService.getshopping();
  }
  addItem(){
this.firebaseService.addItem(this.newItem);
  }
  removeItem(id){
this.firebaseService.removeItem(id);
  }
  login(){
    this.googlePlus.login({
      'webClientId':'319639984576-8vc5ef41783sn29nl39oat2jdjhisacv.apps.googleusercontent.com',
      'offline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc=>{
        alert("login suc")
      }).catch(ns=>{
        alert("Not succ")
      })
    })
  }
 
}
