import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {SalesComponent} from '../../views/sales/sales.component';
import {IncidentComponent} from '../../views/incident/incident.component';
import {AttendanceComponent} from '../../views/attendance/attendance.component';
import {PreSettlementComponent} from '../../views/pre-settlement/pre-settlement.component';
import {ValidatorsComponent} from '../../views/validators/validators.component';


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
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'table-list', component: TableListComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'sales-records', component: SalesComponent},
    {path: 'incidents', component: IncidentComponent},
    {path: 'attendance', component: AttendanceComponent},
    {path: 'pre-settlement', component: PreSettlementComponent},
    {path: 'validators', component: ValidatorsComponent},
];
