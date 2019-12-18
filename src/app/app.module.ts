import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './guards/auth-guard.service';
import { EmployeesService } from './employees.service';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyFirstInterceptor } from './employees.service';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [ EmployeesService, AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: MyFirstInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
