import {Routes} from '@angular/router';
import {LoginComponent} from '../../views/login/login.component';
import {RegisterComponent} from '../../views/register/register.component';
import {ConfirmEmailComponent} from '../../views/confirm-email/confirm-email.component';
import {ErrorPageComponent} from '../../views/error-page/error-page.component';


export const AuthLayoutRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'confirmEmail', component: ConfirmEmailComponent},
    {path: '404', component: ErrorPageComponent},
    {path: '**', redirectTo: '404'}
];
