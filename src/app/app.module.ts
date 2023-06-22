import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { TokenInterceptorService } from 'src/token-interceptor.service';


const appRoute: Routes = [

  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'details/:empId',
    component: ProfileDetailsComponent
  },
  {
    path: 'procurement',
    component: ProcurementComponent
  },
  {
    path:'**',
    component: ErrorComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    ProcurementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
