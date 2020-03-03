import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';


import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTooltipModule} from '@angular/material';
import {SalesComponent} from '../../views/sales/sales.component';
import {PreSettlementComponent} from '../../views/pre-settlement/pre-settlement.component';
import {AttendanceComponent} from '../../views/attendance/attendance.component';
import {ValidatorsComponent} from '../../views/validators/validators.component';
import {IncidentComponent} from '../../views/incident/incident.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
    ],
    declarations: [
        DashboardComponent,
        SalesComponent,
        PreSettlementComponent,
        AttendanceComponent,
        ValidatorsComponent,
        IncidentComponent
    ]
})

export class AdminLayoutModule {
}
