import {AfterViewInit, Component} from '@angular/core';
import * as jexcel from 'jexcel';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements  AfterViewInit {

  data = [
    // tslint:disable-next-line:max-line-length
    ['PERIODO', '2020010101 del 29/ENE/20 al 12/FEB/20', '', '', 'PERIODO ABIERTO', '', 'Autotanque - Litors', '', 'Sucusal', '101 DPG Capital Sindico', 'TURNO MATUTINO'],
    [],
    // tslint:disable-next-line:max-line-length
    ['Empleado', 'Ruta Fija', 'Puesto', '11/03/2020', ],
    // tslint:disable-next-line:max-line-length
    ['', '', '11/03/2020', '12/03/2020', '13/03/2020', '14/03/2020', '15/03/2020', '16/03/2020', '17/03/2020', '18/03/2020'],
    ['1101172', '', '', 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00],
    ['1101175', '', '', 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00],
    ['1101176', '', '', 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00],
    ['1101178', '', '', 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00],
    ['1101171', '', '', 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00],
  ];

  constructor() { }

  ngAfterViewInit() {
    jexcel(document.getElementById('attendance'), {
      data: this.data,
      mergeCells: {
        B1: [3, 1],
        E1: [2, 1],
        G1: [2, 1],
        A3: [1, 2],
        B3: [1, 2],
        C3: [1, 2],
      },
      columns: [
        {width: '250px', },
        {width: '100px', },
        // {width: '100px', type: 'dropdown', source: [ 'Chofer Vendedor Autotanque', 'Chofer Vendedor De Cilindro',  'Ayudante De Vendedor Autotanque', 'Suplente Vespertino', 'Plantero', 'Suplente Matutino' ] },
        {width: '100px', },
        {width: '100px', },
        {width: '100px', },
        {width: '100px', },
        {width: '100px', },
        {width: '100px', },
        {width: '150px', },
        {width: '200px', },
        {width: '200px', },
      ],
      updateTable: function(instance, cell, col, row, val, label, cellName) {

        // row colours
        if (row === 0) {
          cell.style.fontWeight = 'bold';
          cell.classList.add('readonly');
          cell.style.color = '#000';
        }
        if (row === 2) {
          if (col === 0) {
            cell.style.color = '#000';
          } else {
            cell.style.color = '#ffffff';
          }
          cell.style.backgroundColor = 'grey';
          cell.style.fontWeight = 'bold';
          cell.classList.add('readonly');
        }
        if (row === 3) {
          cell.style.color = '#000';
          cell.style.backgroundColor = 'grey';
          cell.style.fontWeight = 'bold';
          cell.classList.add('readonly');
        }
        if (row >= 4 && row < 9) {
          if (col === 0) {
            cell.style.backgroundColor = 'grey';
            cell.style.fontWeight = 'bold';
            cell.style.color = '#ffffff';
            cell.classList.add('readonly');
            cell.style.color = '#000';
          }
          /*if (col === 8) {
            cell.style.backgroundColor = 'green';
            cell.style.fontWeight = 'bold';
            cell.classList.add('readonly');
            cell.style.color = '#000';
          }*/
          /*if (col === 9) {
            cell.style.backgroundColor = 'grey';
            cell.style.fontWeight = 'bold';
            cell.classList.add('readonly');
            cell.style.color = '#000';
          }*/
        }

        /*if (row === 9) {
          cell.classList.add('readonly');
          cell.style.color = '#000';
          if (col <= 7) {
            cell.style.backgroundColor = 'green';
            cell.style.fontWeight = 'bold';
          }
          if (col === 8) {
            cell.style.backgroundColor = 'green';
            cell.style.fontWeight = 'bold';
          }
          if (col === 9) {
            cell.style.backgroundColor = 'grey';
            cell.style.fontWeight = 'bold';
          }
        }*/
      },

      minDimensions: [8, 26]
    });
  }


}
