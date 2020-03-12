import {AfterViewInit, Component} from '@angular/core';
import * as jexcel from 'jexcel';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements  AfterViewInit {
    litros = true;
    servicioss = false;
    cilindros = false;

    data = [
            // tslint:disable-next-line:max-line-length
            ['PERIODO', '2020010101 del 29/ENE/20 al 12/FEB/20', '', '', 'PERIODO ABIERTO', '', 'Autotanque - Litors', '', 'Sucusal', '101 DPG Capital Sindico', 'TURNO MATUTINO'],
            [],
            // tslint:disable-next-line:max-line-length
            ['RUTA', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
            ['', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, '=SUM(B5, C5, D5,E5,F5,G5,H5)', '=SUM(B5, C5, D5,E5,F5,G5)', '=SUM(H5)'],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
            [],
            ['TOTAL de venta por día', '=SUM(B5:B9)', '=SUM(C5:C9)', '=SUM(D5:D9)', '=SUM(E5:E9)', '=SUM(F5:F9)', '=SUM(G5:G9)', '=SUM(H5:H9)', '=SUM(I5:I9)', '=SUM(J5:J9)', '=SUM(K5:K9)' ]
        ];

    datas = [
        // tslint:disable-next-line:max-line-length
        ['PERIODO', '2020010101 del', '29/ENE/20 al 12/FEB/20', '', 'PERIODO ABIERTO', '', 'Autotanque - Servicios', 'Sucusal', '101 DPG Capital Sindico', 'TURNO MATUTINO'],
        // tslint:disable-next-line:max-line-length
        ['RUTA', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
        [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
        [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
        [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
        ['TOTAL de venta por día', 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00 ]
    ];

    datass = [
        // tslint:disable-next-line:max-line-length
        ['PERIODO', '2020010101 del', '29/ENE/20 al 12/FEB/20', '', 'PERIODO ABIERTO', '', 'Cylindro', 'Sucusal', '101 DPG Capital Sindico', 'TURNO MATUTINO'],
        // tslint:disable-next-line:max-line-length
        ['RUTA', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
        [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
        [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
        ['TOTAL de venta por día', 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00 ]
    ];



    ngAfterViewInit() {
        jexcel(document.getElementById('litros'), {
            data: this.data,
            mergeCells:{
                B1:[3,1],
                E1: [2,1],
                G1:[2,1],
                A3: [1, 2]
            },
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
            updateTable:function(instance, cell, col, row, val, label, cellName) {
                
                // row colours
                if(row == 0) {
                    cell.style.fontWeight = 'bold';
                    cell.classList.add('readonly');
                    cell.style.color = '#000';
                }
                if (row == 2) {
                    if(col == 0) {
                        cell.style.color = '#000';
                    } else {
                        cell.style.color = '#ffffff';
                    }
                    cell.style.backgroundColor = 'grey';
                    cell.style.fontWeight = 'bold';
                    cell.classList.add('readonly');
                }
                if (row == 3) {
                    cell.style.color = '#000';
                    cell.style.backgroundColor = 'grey';
                    cell.style.fontWeight = 'bold';
                    cell.classList.add('readonly');
                }
                if(row >= 4 && row < 9) {
                    if(col == 0) {
                        cell.style.backgroundColor = 'grey';
                        cell.style.fontWeight = 'bold';
                        cell.style.color = '#ffffff';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                    if(col == 8) {
                        cell.style.backgroundColor = 'green';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                    if(col == 9) {
                        cell.style.backgroundColor = 'grey';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                    if(col == 10) {
                        cell.style.backgroundColor = 'silver';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                }
        
                if(row == 9) {
                    cell.classList.add('readonly');
                    cell.style.color = '#000';
                    if(col <= 7) {
                        cell.style.backgroundColor = 'green';
                        cell.style.fontWeight = 'bold';
                    }
                    if(col == 8) {
                        cell.style.backgroundColor = 'green';
                        cell.style.fontWeight = 'bold';
                    }
                    if(col == 9) {
                        cell.style.backgroundColor = 'grey';
                        cell.style.fontWeight = 'bold';
                    }
                    if(col == 10) {
                        cell.style.backgroundColor = 'silver';
                        cell.style.fontWeight = 'bold';
                    }
                }
            },
            
            minDimensions: [8, 26]
        });

        jexcel(document.getElementById('servicioss'), {
            data: this.datas,
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
               A2: 'fontWeight: bold',
               B2: 'fontWeight: bold',
               C2: 'fontWeight: bold',
               D2: 'fontWeight: bold',
               E2: 'fontWeight: bold',
               F2: 'fontWeight: bold',
               G2: 'fontWeight: bold',
               H2: 'fontWeight: bold',
               I2: 'fontWeight: bold',
               J2: 'fontWeight: bold',
               K2: 'fontWeight: bold',
               A7: 'background-color: green; color: white',
               B7: 'background-color: green; color: white',
               C7: 'background-color: green; color: white',
               D7: 'background-color: green; color: white',
               E7: 'background-color: green; color: white',
               F7: 'background-color: green; color: white',
               G7: 'background-color: green; color: white',
               H7: 'background-color: green; color: white',
               I7: 'background-color: green; color: white',
               J7: 'background-color: gray; color: white',
               K7: 'background-color: darkgray; color: white',
            },
            minDimensions: [8, 26]
        });

        jexcel(document.getElementById('cilindros'), {
            data: this.datass,
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
               A2: 'fontWeight: bold',
               B2: 'fontWeight: bold',
               C2: 'fontWeight: bold',
               D2: 'fontWeight: bold',
               E2: 'fontWeight: bold',
               F2: 'fontWeight: bold',
               G2: 'fontWeight: bold',
               H2: 'fontWeight: bold',
               I2: 'fontWeight: bold',
               J2: 'fontWeight: bold',
               K2: 'fontWeight: bold',
               A7: 'background-color: green; color: white',
               B7: 'background-color: green; color: white',
               C7: 'background-color: green; color: white',
               D7: 'background-color: green; color: white',
               E7: 'background-color: green; color: white',
               F7: 'background-color: green; color: white',
               G7: 'background-color: green; color: white',
               H7: 'background-color: green; color: white',
               I7: 'background-color: green; color: white',
               J7: 'background-color: gray; color: white',
               K7: 'background-color: darkgray; color: white',
            },
            minDimensions: [8, 26]
        });


    }



    screen() {
        if (this.litros === true && this.servicioss === false &&  this.cilindros === false) {
         this.servicioss = false;
         this.cilindros = false
        } else if (this.litros === false && this.servicioss === true &&  this.cilindros === false) {
            this.litros = false;
            this.cilindros = false
        } else if (this.litros === false && this.servicioss === false &&  this.cilindros === true) {
            this.litros = false;
            this.servicioss = false
        }
    }
}
