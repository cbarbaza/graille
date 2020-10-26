import { Injectable } from '@angular/core';
import { Router } from  '@angular/router';
import { AngularFireAuth } from  '@angular/fire/auth';
import { User } from  'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user:  User;
  constructor(public  afAuth: AngularFireAuth,
    public  router: Router) {

      this.afAuth.authState.subscribe(user => {
        if (user){
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          localStorage.setItem('user', null);
        }
      });
    }

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


    async SignInAnonymously(){
      await this.afAuth.signInAnonymously().catch((error) => console.log('error signInAnonymously'));
    }

    async logout(){
      await this.afAuth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['admin/login']);
    }
  }
