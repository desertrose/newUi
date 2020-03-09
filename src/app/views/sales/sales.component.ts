import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as jexcel from 'jexcel';
import {style} from '@angular/animations';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements  AfterViewInit {

    data = [
        {
        'RUTA': '275',
        'lunes': '0.00',
        'martes': '0.00',
        'miércoles': '0.00',
        'jueves': '0.00',
        'viernes': '0.00',
        'sábado': '0.00',
        'domingo': '0.00',
         'Total de venta por ruta': '=SUM(A1:H1)'
    },
        {
            'RUTA': '301',
            'lunes': '42.00',
            'martes': '26.00',
            'miércoles': '31.00',
            'jueves': '0.00',
            'viernes': '38.00',
            'sábado': '35.00',
            'domingo': '32.67'
        },
        {
            'RUTA': '303',
            'lunes': '20.27',
            'martes': '16.33',
            'miércoles': '29.83',
            'jueves': '15.67',
            'viernes': '26.47',
            'sábado': '26.33',
            'domingo': '20.00'
        },
        {
            'RUTA': '306',
            'lunes': '24.00',
            'martes': '26.00',
            'miércoles': '34.33',
            'jueves': '24.33',
            'viernes': '35.67',
            'sábado': '30.00',
            'domingo': '28.00'
        },
        {
            'RUTA': '308',
            'lunes': '25.33',
            'martes': '26.00',
            'miércoles': '29.33',
            'jueves': '0.00',
            'viernes': '27.00',
            'sábado': '21.67',
            'domingo': '27.67'
        },
        {
            'RUTA': '310',
            'lunes': '23.00',
            'martes': '19.33',
            'miércoles': '28.33',
            'jueves': '30.00',
            'viernes': '42.20',
            'sábado': '30.33',
            'domingo': '22.33'
        },
        {
            'RUTA': '311',
            'lunes': '11.33',
            'martes': '13.00',
            'miércoles': '17.33',
            'jueves': '50.33',
            'viernes': '19.00',
            'sábado': '15.67',
            'domingo': '16.67'
        },
        {
            'RUTA': '312',
            'lunes': '26.33',
            'martes': '18.33',
            'miércoles': '21.33',
            'jueves': '0.00',
            'viernes': '20.00',
            'sábado': '20.47',
            'domingo': '16.00'
        },
        {
            'RUTA': '313',
            'lunes': '0.00',
            'martes': '0.00',
            'miércoles': '0.00',
            'jueves': '0.00',
            'viernes': '0.00',
            'sábado': '0.00',
            'domingo': '0.00'
        },
        {
            'RUTA': '328',
            'lunes': '15.67',
            'martes': '15.33',
            'miércoles': '18.33',
            'jueves': '0.00',
            'viernes': '22.00',
            'sábado': '15.33',
            'domingo': '16.67'
        },
        {
            'RUTA': '332',
            'lunes': '36.67',
            'martes': '32.33',
            'miércoles': '24.00',
            'jueves': '0.00',
            'viernes': '33.33',
            'sábado': '37.67',
            'domingo': '20.67'
        },
        {
            'RUTA': '340',
            'lunes': '13.00',
            'martes': '11.67',
            'miércoles': '18.83',
            'jueves': '20.67',
            'viernes': '29.33',
            'sábado': '24.33',
            'domingo': '10.00'
        },
        {
            'RUTA': '345',
            'lunes': '22.33',
            'martes': '15.67',
            'miércoles': '32.00',
            'jueves': '0.00',
            'viernes': '28.33',
            'sábado': '32.00',
            'domingo': '35.33'
        },
        {
            'RUTA': '349',
            'lunes': '10.67',
            'martes': '29.67',
            'miércoles': '25.33',
            'jueves': '0.00',
            'viernes': '27.33',
            'sábado': '24.67',
            'domingo': '36.00'
        },
        {
            'RUTA': '350',
            'lunes': '16.33',
            'martes': '16.33',
            'miércoles': '19.00',
            'jueves': '0.00',
            'viernes': '29.00',
            'sábado': '21.33',
            'domingo': '27.00'
        },
        {
            'RUTA': '352',
            'lunes': '28.33',
            'martes': '31.67',
            'miércoles': '25.00',
            'jueves': '22.00',
            'viernes': '31.67',
            'sábado': '33.67',
            'domingo': '22.67'
        },
        {
            'RUTA': '361',
            'lunes': '23.00',
            'martes': '24.33',
            'miércoles': '19.33',
            'jueves': '0.00',
            'viernes': '23.00',
            'sábado': '21.00',
            'domingo': '15.00'
        },
        {
            'RUTA': '363',
            'lunes': '24.67',
            'martes': '36.33',
            'miércoles': '28.67',
            'jueves': '40.33',
            'viernes': '37.00',
            'sábado': '39.00',
            'domingo': '40.33'
        },
        {
            'RUTA': '368',
            'lunes': '0.00',
            'martes': '0.00',
            'miércoles': '0.00',
            'jueves': '0.00',
            'viernes': '0.00',
            'sábado': '0.00',
            'domingo': '0.00'
        },
        {
            'RUTA': '369',
            'lunes': '27.00',
            'martes': '35.33',
            'miércoles': '22.67',
            'jueves': '0.00',
            'viernes': '28.33',
            'sábado': '18.67',
            'domingo': '27.00'
        },
        {
            'RUTA': '371',
            'lunes': '31.33',
            'martes': '34.00',
            'miércoles': '43.50',
            'jueves': '0.00',
            'viernes': '44.00',
            'sábado': '38.10',
            'domingo': '42.33'
        },
        {
            'RUTA': '372',
            'lunes': '15.67',
            'martes': '21.00',
            'miércoles': '27.33',
            'jueves': '0.00',
            'viernes': '25.67',
            'sábado': '12.00',
            'domingo': '20.33'
        },
        {
            'RUTA': '373',
            'lunes': '21.00',
            'martes': '18.00',
            'miércoles': '21.67',
            'jueves': '24.00',
            'viernes': '20.67',
            'sábado': '25.67',
            'domingo': '14.33'
        },
        {
            'RUTA': '374',
            'lunes': '16.00',
            'martes': '20.67',
            'miércoles': '21.00',
            'jueves': '18.67',
            'viernes': '20.67',
            'sábado': '18.00',
            'domingo': '13.67'
        },
        {
            'RUTA': '375',
            'lunes': '15.00',
            'martes': '18.67',
            'miércoles': '27.00',
            'jueves': '0.00',
            'viernes': '32.67',
            'sábado': '17.00',
            'domingo': '20.33'
        },
        {
            'RUTA': '376',
            'lunes': '24.67',
            'martes': '28.00',
            'miércoles': '32.67',
            'jueves': '0.00',
            'viernes': '39.00',
            'sábado': '30.00',
            'domingo': '23.67'
        }];

    ngAfterViewInit() {
        jexcel(document.getElementById('spreadsheet'), {
            data: this.data,
            columns: [
                {title: 'RUTA', width: '100px', },
                {title: 'lunes', width: '100px', },
                {title: 'martes', width: '100px', },
                {title: 'miércoles', width: '100px', },
                {title: 'jueves', width: '100px', },
                {title: 'viernes', width: '100px', },
                {title: 'sábado', width: '100px', },
                {title: 'domingo', width: '100px', },
                {title: 'Total de venta por ruta', width: '150px', },
                {title: 'Total de ventas sin domingos', width: '200px', },
                {title: 'Total de ventas solo domingos', width: '200px', },
            ],
            style: {
              // A1: 'background-color: orange;'
            },
            minDimensions: [8, 26]
        });
    }


}
