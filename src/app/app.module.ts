import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './guards/auth-guard.service';
//import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeesService } from './employees.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
//import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpSetHeaders } from './httpSetHeaders.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    //EmployeeCreateComponent,
    EmployeeListComponent,
    //EmployeeEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ButtonModule,
    TableModule
  ],
  providers: [ EmployeesService, AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: httpSetHeaders, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
