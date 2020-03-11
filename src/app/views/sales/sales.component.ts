import {AfterViewInit, Component} from '@angular/core';
import * as jexcel from 'jexcel';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements  AfterViewInit {

    data = [
            ['PERIODO', '', '2020010101 del', '29/ENE/20 al 12/FEB/20', '', 'PERIODO ABIERTO', '', 'Autotanque - Servicios'],
            // tslint:disable-next-line:max-line-length
            ['RUTA', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00]
        ];

    ngAfterViewInit() {
        jexcel(document.getElementById('litros'), {
            data: this.data,
            columns: [
                {width: '150px', },
                {width: '100px', },
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
            style: {
               A1: 'fontWeight: bold',
               B1: 'fontWeight: bold',
               C1: 'fontWeight: bold',
               D1: 'fontWeight: bold',
               E1: 'fontWeight: bold',
               F1: 'fontWeight: bold',
               G1: 'fontWeight: bold',
               H1: 'fontWeight: bold',
               I1: 'fontWeight: bold',
               J1: 'fontWeight: bold',
               K1: 'fontWeight: bold',
               A27: 'background-color: green; color: white',
               B27: 'background-color: green; color: white',
               C27: 'background-color: green; color: white',
               D27: 'background-color: green; color: white',
               E27: 'background-color: green; color: white',
               F27: 'background-color: green; color: white',
               G27: 'background-color: green; color: white',
               H27: 'background-color: green; color: white',
               I27: 'background-color: green; color: white',
               J27: 'background-color: gray; color: white',
               K27: 'background-color: darkgray; color: white',
            },
            minDimensions: [8, 26]
        });

        /*jexcel(document.getElementById('servicios'), {
            data: this.data,
            columns: [
                {title: 'RUTA', width: '150px', },
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
               A27: 'background-color: green; color: white',
               B27: 'background-color: green; color: white',
               C27: 'background-color: green; color: white',
               D27: 'background-color: green; color: white',
               E27: 'background-color: green; color: white',
               F27: 'background-color: green; color: white',
               G27: 'background-color: green; color: white',
               H27: 'background-color: green; color: white',
               I27: 'background-color: green; color: white',
               J27: 'background-color: gray; color: white',
               K27: 'background-color: darkgray; color: white',
            },
            minDimensions: [8, 26]
        });

        jexcel(document.getElementById('cilindros'), {
            data: this.data,
            columns: [
                {title: 'RUTA', width: '150px', },
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
               A27: 'background-color: green; color: white',
               B27: 'background-color: green; color: white',
               C27: 'background-color: green; color: white',
               D27: 'background-color: green; color: white',
               E27: 'background-color: green; color: white',
               F27: 'background-color: green; color: white',
               G27: 'background-color: green; color: white',
               H27: 'background-color: green; color: white',
               I27: 'background-color: green; color: white',
               J27: 'background-color: gray; color: white',
               K27: 'background-color: darkgray; color: white',
            },
            minDimensions: [8, 26]
        });*/
    }


}
