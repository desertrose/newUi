import {AfterViewInit, Component} from '@angular/core';
import * as jexcel from 'jexcel';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements  AfterViewInit {
    litros = false;
    servicioss = true;
    cilindros = true;

    data = [
            // tslint:disable-next-line:max-line-length
            ['PERIODO', '2020010101 del 29/ENE/20 al 12/FEB/20', '', '', 'PERIODO ABIERTO', '', 'Autotanque - Litors', '', 'Sucusal', '101 DPG Capital Sindico', 'TURNO MATUTINO'],
            [],
            // tslint:disable-next-line:max-line-length
            ['RUTA', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
            ['', '12/03/2020', '13/03/2020', '14/03/2020', '15/03/2020', '16/03/2020', '17/03/2020', '18/03/2020', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, '=ROUND(SUM(B5:H5), 2)', '=ROUND(SUM(B5:G5), 2)', '=ROUND(SUM(H5), 2)'],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
            [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
            ['TOTAL de venta por día', '=ROUND(SUM(B5:B9), 2)', '=ROUND(SUM(C5:C9), 2)', '=ROUND(SUM(D5:D9), 2)', '=ROUND(SUM(E5:E9), 2)', '=ROUND(SUM(F5:F9), 2)', '=ROUND(SUM(G5:G9), 2)', '=ROUND(SUM(H5:H9), 2)', '=ROUND(SUM(I5:I9), 2)', '=ROUND(SUM(J5:J9), 2)', '=ROUND(SUM(K5:K9), 2)' ]
        ];

    datas = [
        // tslint:disable-next-line:max-line-length
        ['PERIODO', '2020010101 del 29/ENE/20 al 12/FEB/20', '', '', 'PERIODO ABIERTO', '', 'Autotanque - Litors', '', 'Sucusal', '101 DPG Capital Sindico', 'TURNO MATUTINO'],
        [],
        // tslint:disable-next-line:max-line-length
        ['RUTA', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
        ['', '12/03/2020', '13/03/2020', '14/03/2020', '15/03/2020', '16/03/2020', '17/03/2020', '18/03/2020', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
        [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, '=SUM(B5, C5, D5,E5,F5,G5,H5)', '=SUM(B5, C5, D5,E5,F5,G5)', '=SUM(H5)'],
        [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
        [],
        [],
        ['TOTAL de venta por día', '=SUM(B5:B9)', '=SUM(C5:C9)', '=SUM(D5:D9)', '=SUM(E5:E9)', '=SUM(F5:F9)', '=SUM(G5:G9)', '=SUM(H5:H9)', '=SUM(I5:I9)', '=SUM(J5:J9)', '=SUM(K5:K9)' ]
    ];

    datass = [
        // tslint:disable-next-line:max-line-length
        ['PERIODO', '2020010101 del 29/ENE/20 al 12/FEB/20', '', '', 'PERIODO ABIERTO', '', 'Autotanque - Litors', '', 'Sucusal', '101 DPG Capital Sindico', 'TURNO MATUTINO'],
        [],
        // tslint:disable-next-line:max-line-length
        ['RUTA', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
        ['', '12/03/2020', '13/03/2020', '14/03/2020', '15/03/2020', '16/03/2020', '17/03/2020', '18/03/2020', 'Total de venta por ruta', 'Total de ventas sin domingos', 'Total de ventas solo domingos'],
        [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, '=SUM(B5, C5, D5,E5,F5,G5,H5)', '=SUM(B5, C5, D5,E5,F5,G5)', '=SUM(H5)'],
        [202, 21.67, 17.67, 21.67, 22.33, 18.67, 20.67, 18.00, 140.68, 122.68, 18.00],
        [],
        [],
        [],
        ['TOTAL de venta por día', '=SUM(B5:B9)', '=SUM(C5:C9)', '=SUM(D5:D9)', '=SUM(E5:E9)', '=SUM(F5:F9)', '=SUM(G5:G9)', '=SUM(H5:H9)', '=SUM(I5:I9)', '=SUM(J5:J9)', '=SUM(K5:K9)' ]
    ];



    ngAfterViewInit() {
        jexcel(document.getElementById('litros'), {
            data: this.data,
            defaultColWidth: 100,
            tableOverflow: true,
            tableWidth: "900px",
            freezeColumns: 3,
            mergeCells: {
                B1: [3, 1],
                E1: [2, 1],
                G1: [2, 1],
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
                    if (col === 8) {
                        cell.style.backgroundColor = 'green';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                    if (col === 9) {
                        cell.style.backgroundColor = 'grey';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                    if (col === 10) {
                        cell.style.backgroundColor = 'silver';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                }

                if (row === 9) {
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
                    if (col === 10) {
                        cell.style.backgroundColor = 'silver';
                        cell.style.fontWeight = 'bold';
                    }
                }
            },

            minDimensions: [8, 26]
        });

        jexcel(document.getElementById('servicioss'), {
            data: this.datas,
            mergeCells: {
                B1: [3, 1],
                E1: [2, 1],
                G1: [2, 1],
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
                    if (col === 8) {
                        cell.style.backgroundColor = 'green';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                    if (col === 9) {
                        cell.style.backgroundColor = 'grey';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                    if (col === 10) {
                        cell.style.backgroundColor = 'silver';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                }

                if (row === 9) {
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
                    if (col === 10) {
                        cell.style.backgroundColor = 'silver';
                        cell.style.fontWeight = 'bold';
                    }
                }
            },

            minDimensions: [8, 26]
        });

        jexcel(document.getElementById('cilindros'), {
            data: this.datass,
            mergeCells: {
                B1: [3, 1],
                E1: [2, 1],
                G1: [2, 1],
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
                    if (col === 8) {
                        cell.style.backgroundColor = 'green';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                    if (col === 9) {
                        cell.style.backgroundColor = 'grey';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                    if (col === 10) {
                        cell.style.backgroundColor = 'silver';
                        cell.style.fontWeight = 'bold';
                        cell.classList.add('readonly');
                        cell.style.color = '#000';
                    }
                }

                if (row === 9) {
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
                    if (col === 10) {
                        cell.style.backgroundColor = 'silver';
                        cell.style.fontWeight = 'bold';
                    }
                }
            },

            minDimensions: [8, 26]
        });
    }



    litroscheck() {
            this.litros = false;
            this.servicioss = true;
            this.cilindros = true;
    }
    serviciosscheck() {
            this.servicioss = false;
            this.litros = true;
            this.cilindros = true;
    }
    cilindroscheck() {

            this.cilindros = false;
            this.servicioss = true;
            this.litros = true;

    }
}
