import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  values = [];
  constructor() {



    this.values = [{
      RoutaID: '501',
      Date: '22/12/2020',
      Services: 'Fuel',
      Quantity: '220 Ltr'
    }, {
      RoutaID: '502',
      Date: '22/12/2020',
      Services: 'Gas',
      Quantity: '220 Ltr'
    }, {
      RoutaID: '502',
      Date: '22/12/2020',
      Services: 'Gas',
      Quantity: '220 Ltr'
    }, {
      RoutaID: '502',
      Date: '22/12/2020',
      Services: 'Gas',
      Quantity: '220 Ltr'
    }, {
      RoutaID: '502',
      Date: '22/12/2020',
      Services: 'Gas',
      Quantity: '220 Ltr'
    }, {
      RoutaID: '502',
      Date: '22/12/2020',
      Services: 'Cylinder',
      Quantity: '220 Ltr'
    }, {
      RoutaID: '502',
      Date: '22/12/2020',
      Services: 'Cylinder',
      Quantity: '220 Ltr'
    }, {
      RoutaID: '502',
      Date: '22/12/2020',
      Services: 'Cylinder',
      Quantity: '220 Ltr'
    }, {
      RoutaID: '502',
      Date: '22/12/2020',
      Services: 'Cylinder',
      Quantity: '220 Ltr'
    }, {
      RoutaID: '502',
      Date: '22/12/2020',
      Services: 'Cylinder',
      Quantity: '220 Ltr'
    }, {
      RoutaID: '502',
      Date: '22/12/2020',
      Services: 'Cylinder',
      Quantity: '220 Ltr'
    }];
  }

  ngOnInit() {
  }

}
