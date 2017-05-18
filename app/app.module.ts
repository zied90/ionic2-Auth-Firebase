import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{GooglePlus} from '@ionic-native/google-plus';
import{AngularFireModule}  from 'angularfire2';
import firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import{HttpModule} from '@angular/http';
import{AngularFireDatabaseModule} from 'angularfire2/database';

import{FirebaseService} from './../providers/firebase-service'

const firebaseConfig = {
    apiKey: "AIzaSyCWZzZecxqS0eQXOykvPHJ_Yn3_JGqufTM",
    authDomain: "ionic2-71bf4.firebaseapp.com",
    databaseURL: "https://ionic2-71bf4.firebaseio.com",
    projectId: "ionic2-71bf4",
    storageBucket: "ionic2-71bf4.appspot.com",
    messagingSenderId: "319639984576"
  }
  firebase.initializeApp(firebaseConfig)
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    FirebaseService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}
