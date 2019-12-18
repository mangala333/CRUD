import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeResolverService } from '../employee-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    resolve: { employeeData: EmployeeResolverService }
  }
];

@NgModule({
  declarations: [  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EmployeeResolverService]
})
export class ListRoutingModule { }