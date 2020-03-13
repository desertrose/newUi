import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular5-social-login';
import {Service} from '../../services/service'
import {GoogleUser} from '../../models/GoogleUser'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService, public service: Service, private router: Router) { }

  ngOnInit() {
  }
  public signinWithGoogle () {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
 
    this.socialAuthService.signIn(socialPlatformProvider)
    .then((userData) => {
      localStorage.setItem('Token',userData.idToken);
       //on success
       //this will return user data from google. What you need is a user token which you will send it to the server
       this.service.VerifyToken(userData.idToken).subscribe(data=>
        {
          if(data!=null)
          {
            let user = data as GoogleUser;
            localStorage.setItem('Email',user.email);
            localStorage.setItem('Picture',user.picture);
            localStorage.setItem('FullName',user.given_name+" "+user.family_name);
            this.router.navigate(['/dashboard']);
          }
          else{
            localStorage.setItem('Token','');
          }
        })
    });
 }
 public signinLocalAccount()
 {
   localStorage.setItem('Token','TokenValido');
   localStorage.setItem('Email','usuario@local');
   localStorage.setItem('Picture','');
   localStorage.setItem('FullName','Usuario Local');
   this.router.navigate(['/dashboard']);
 }
}
