import{AngularFireDatabase} from 'angularfire2/database'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseService {

  constructor(public http: Http, public afd:AngularFireDatabase) {
  
  }
 getshopping(){
return this.afd.list('/shoppingItems/');
 }
 addItem(name){
this.afd.list('/shoppingItems/').push(name)
 }
 removeItem(id){
return this.afd.list('/shoppingItems/').remove(id);
 }
}
