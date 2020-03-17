import {Routes} from '@angular/router';
import {LoginComponent} from '../../views/login/login.component';
import {RegisterComponent} from '../../views/register/register.component';
import {ConfirmEmailComponent} from '../../views/confirm-email/confirm-email.component';


export const AuthLayoutRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'confirmEmail', component: ConfirmEmailComponent}
];
