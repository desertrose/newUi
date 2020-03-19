import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {SalesComponent} from '../../views/sales/sales.component';
import {IncidentComponent} from '../../views/incident/incident.component';
import {AttendanceComponent} from '../../views/attendance/attendance.component';
import {PreSettlementComponent} from '../../views/pre-settlement/pre-settlement.component';
import {ValidatorsComponent} from '../../views/validators/validators.component';
import { AuthGuard } from '../../helpers/Auth.Guard'

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

export const AdminLayoutRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'sales-records', component: SalesComponent},
    {path: 'incidents', component: IncidentComponent},
    {path: 'attendance', component: AttendanceComponent},
    {path: 'pre-settlement', component: PreSettlementComponent},
    {path: 'validators', component: ValidatorsComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: 'routes', component: RoutesComponent},
    {path: 'bus', component: BusComponent},
    {path: 'branchs', component: BranchsComponent},
    {path: 'periods', component: PeriodsComponent},
    {path: 'payrolltypes', component: PayrollTypesComponent},
    {path: 'activities', component: ActivitiesComponent},
    {path: 'positions', component: PositionsComponent},
    {path: 'incidences', component: IncidencesComponent},
    {path: 'factors', component: FactorsComponent},
    {path: 'leaves', component: LeavesComponent},
    {path: 'absenteeisms', component: AbsenteeismsComponent},
];
