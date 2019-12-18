import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'employee/create',
    loadChildren: './employee-create/employee-create.module#EmployeeCreateModule'
    //canActivate: [AuthGuardService]
  },
  {
    path: 'employee/get',
    component: EmployeeListComponent
  },
  {
    path: 'employee/edit/:id',
    loadChildren: './employee-edit/employee-edit.module#EmployeeEditModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
