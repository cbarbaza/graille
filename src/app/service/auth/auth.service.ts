import { Injectable } from '@angular/core';
import { Router } from  '@angular/router';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  '@angular/fire/auth';
import { User } from  'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user:  User;
  constructor(public  afAuth: AngularFireAuth,
              public  router: Router) {}

    get isLoggedIn(): boolean {
      const  user  =  JSON.parse(localStorage.getItem('user'));
      return  user  !==  null;
    }

    // Sign in with email/password
    SignIn(email, password) {
        console.log('request', email, password);

      return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['home']);
      }).catch((error) => {
        window.alert(error.message);
      });
    }

    async logout(){
      await this.afAuth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['admin/login']);
    }
  }
