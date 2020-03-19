import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as jexcel from 'jexcel';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit, AfterViewInit {
  data = [
    ['PERIODO', '2020010101 del 29/ENE/20 al 12/FEB/20', '', '', 'PERIODO ABIERTO', '', 'Autotanque - Litors', '', 'Sucusal', '101 DPG Capital Sindico', 'TURNO MATUTINO'],
    [],
    ['Empleado', 'Puesto', '11/03/2020', '', '', '12/03/2020', '', '', '13/03/2020', ],
    ['', '',  'Incidencia',	'Tiempo Extra',	'Viaticos',  'Incidencia',	'Tiempo Extra',	'Viaticos',  'Incidencia',	'Tiempo Extra',	'Viaticos'],
    ['1100124 Sustaita Cepeda Pedro', 'Surtidor',	'Descanso',	6,	'NO',	'Descanso',	6,	'NO',	'Descanso',	6,	'NO'],
    ['1100124 Sustaita Cepeda Pedro', 'Surtidor',	'Descanso',	6,	'NO',	'Descanso',	6,	'NO',	'Descanso',	6,	'NO'],
    ['1100124 Sustaita Cepeda Pedro', 'Surtidor',	'Descanso',	6,	'NO',	'Descanso',	6,	'NO',	'Descanso',	6,	'NO'],
    ['1100124 Sustaita Cepeda Pedro', 'Surtidor',	'Descanso',	6,	'NO',	'Descanso',	6,	'NO',	'Descanso',	6,	'NO'],
    ['1100124 Sustaita Cepeda Pedro', 'Surtidor',	'Descanso',	6,	'NO',	'Descanso',	6,	'NO',	'Descanso',	6,	'NO'],
  ];
  vacaciones = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jexcel(document.getElementById('incidents'), {
      data: this.data,
      // tableOverflow: true,
      minDimensions: [12, 26],
      mergeCells: {
        B1: [3, 1],
        E1: [2, 1],
        G1: [2, 1],
        A3: [1, 2],
        B3: [1, 2],
        C3: [3, 1],
        F3: [3, 1],
        I3: [3, 1],
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
    });
  }


}
