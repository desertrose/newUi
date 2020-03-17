import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {SalesComponent} from '../../views/sales/sales.component';
import {IncidentComponent} from '../../views/incident/incident.component';
import {AttendanceComponent} from '../../views/attendance/attendance.component';
import {PreSettlementComponent} from '../../views/pre-settlement/pre-settlement.component';
import {ValidatorsComponent} from '../../views/validators/validators.component';
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
    {path: 'dashboard', component: DashboardComponent},
    {path: 'sales-records', component: SalesComponent},
    {path: 'incidents', component: IncidentComponent},
    {path: 'attendance', component: AttendanceComponent},
    {path: 'pre-settlement', component: PreSettlementComponent},
    {path: 'validators', component: ValidatorsComponent},
];
