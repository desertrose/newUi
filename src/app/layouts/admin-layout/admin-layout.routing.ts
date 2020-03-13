import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {SalesComponent} from '../../views/sales/sales.component';
import {IncidentComponent} from '../../views/incident/incident.component';
import {AttendanceComponent} from '../../views/attendance/attendance.component';
import {PreSettlementComponent} from '../../views/pre-settlement/pre-settlement.component';
import {ValidatorsComponent} from '../../views/validators/validators.component';
import {AddSalesComponent} from '../../views/add-sales/add-sales.component';
import { AuthGuard } from '../../helpers/Auth.Guard'


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
    {path: 'sales-records', canActivate: [AuthGuard], component: SalesComponent},
    {path: 'incidents', canActivate: [AuthGuard], component: IncidentComponent},
    {path: 'attendance', canActivate: [AuthGuard], component: AttendanceComponent},
    {path: 'pre-settlement', canActivate: [AuthGuard], component: PreSettlementComponent},
    {path: 'validators', canActivate: [AuthGuard], component: ValidatorsComponent},
    {path: 'add-sales', canActivate: [AuthGuard], component: AddSalesComponent},
];
