import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Service} from '../../services/service'

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {
  Informacion: string = "Email confirmado";
  constructor(public service: Service, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      let email = params['Email'];
      if(email!=null && email != undefined)
      {
      service.ConfirmEmail(email).subscribe(data=>
        {

        }, error=>{
          this.Informacion = 'No pudo confirmarse el correo';
        });
      }
      else
      {
        this.Informacion = 'Faltan parametros';
      }
  });
  }
  ngOnInit() {
  }
  login()
  {
    this.router.navigate(['/login']);
  }
}
