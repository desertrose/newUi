import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class Service {
    urlBase:string;
  constructor(private http: HttpClient) { 
    this.urlBase = environment.urlWebApi;
  }

  VerifyToken(token)
  {
    return this.http.post(`${this.urlBase}/src/account.php`,{'token' : token});
  }
  Login(email, pass)
  {
    return this.http.post(`${this.urlBase}/src/login.php`,{'Email' : email, 'Pass': pass});
  }
  Register(email, pass, name, lastname)
  {
    return this.http.post(`${this.urlBase}/src/register.php`,{'Email' : email, 'Pass': pass, 'Name': name, 'LastName': lastname});
  }
  ConfirmEmail(email)
  {
    return this.http.post(`${this.urlBase}/src/confirmEmail.php`,{'Email' : email});
  }
}