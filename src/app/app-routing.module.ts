import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: 'employee/create',
    component: EmployeeCreateComponent
  },
  {
    path: 'employee/get',
    component: EmployeeListComponent
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeEditComponent,
    // children: [
    //   {
    //       path: 'employee/get',
    //       component: EmployeeListComponent,
    //       outlet: 'getEmployee'
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
