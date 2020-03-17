import { Component, OnInit } from '@angular/core';
import {Service} from '../../services/service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  pass: string;
  name: string;
  lastName: string;
  constructor(public service: Service, private router: Router) { }
  ngOnInit() {
  }
  registrar()
  {
    this.service.Register(this.email, this.pass, this.name, this.lastName).subscribe(data=>
      {
        if(data!=null)
        {
          alert("Se te ha enviado un correo para verificar tu Email");
          this.router.navigate(['/login']);
        }
        else{
          alert('Hubo algun error al intentar registrar este usuario');
        }
      });
  }
  goToLogin()
  {
    this.router.navigate(['/login']);
  }
}
