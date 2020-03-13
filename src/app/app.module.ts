import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import { getAuthServiceConfigs } from './socialloginConfig';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider
  } from 'angular5-social-login';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        SocialLoginModule,
        HttpClientModule,
        /*AgmCoreModule.forRoot({
          apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        })*/
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
    ],
    providers: [{provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
