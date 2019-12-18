import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './employee-create-routing.module';
import { EmployeeCreateComponent } from './employee-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeCreateComponent],
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EmployeeCreateModule { }
