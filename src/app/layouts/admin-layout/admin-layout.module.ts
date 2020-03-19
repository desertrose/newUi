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
import { EmployeesComponent } from '../../views/querys/employees/employees.component';
import { RoutesComponent } from '../../views/querys/routes/routes.component';
import { BusComponent } from '../../views/querys/bus/bus.component';
import { BranchsComponent } from '../../views/querys/branchs/branchs.component';
import { PeriodsComponent } from '../../views/querys/periods/periods.component';
import { PayrollTypesComponent } from '../../views/querys/payroll-types/payroll-types.component';
import { ActivitiesComponent } from '../../views/querys/activities/activities.component';
import { PositionsComponent } from '../../views/querys/positions/positions.component';
import { IncidencesComponent } from '../../views/querys/incidences/incidences.component';
import { FactorsComponent } from '../../views/querys/factors/factors.component';
import { LeavesComponent } from '../../views/querys/leaves/leaves.component';
import { AbsenteeismsComponent } from '../../views/querys/absenteeisms/absenteeisms.component';


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
        IncidentComponent,
        EmployeesComponent,
        RoutesComponent,
        BusComponent,
        BranchsComponent,
        PeriodsComponent,
        PayrollTypesComponent,
        ActivitiesComponent,
        PositionsComponent,
        IncidencesComponent,
        FactorsComponent,
        LeavesComponent,
        AbsenteeismsComponent,
    ]
})

export class AdminLayoutModule {
}
