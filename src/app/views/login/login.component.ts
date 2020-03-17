import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular5-social-login';
import {Service} from '../../services/service'
import {GoogleUser} from '../../models/GoogleUser'
import { Router } from '@angular/router';
import {LocalUser} from '../../models/LocalUser'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  pass: string = '';
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
    this.service.Login(this.email, this.pass).subscribe(data=>
    {
      if(data!=null)
      {
        let user = data as LocalUser;
        localStorage.setItem('Email',user.Email);
        localStorage.setItem('Picture',user.Picture);
        localStorage.setItem('FullName',user.Name+" "+user.LastName);
        localStorage.setItem('Token','Token Valido');
        this.router.navigate(['/dashboard']);
      }
      else{
        alert('Password o Email incorrecto');
        localStorage.setItem('Token','');
      }
    });
 }
}
