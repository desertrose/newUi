import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthLayoutRoutes} from './auth-layout.routing';
import {LoginComponent} from '../../views/login/login.component';
import {RegisterComponent} from '../../views/register/register.component';
import {ConfirmEmailComponent} from '../../views/confirm-email/confirm-email.component';
import {ErrorPageComponent} from '../../views/error-page/error-page.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthLayoutRoutes),
        FormsModule
        // NgbModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ConfirmEmailComponent,
        ErrorPageComponent
    ]
})
export class AuthLayoutModule {
}
