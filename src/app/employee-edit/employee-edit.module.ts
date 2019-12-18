import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './employee-edit-routing.module';
import { EmployeeEditComponent } from './employee-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeEditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EmployeeEditModule { }
