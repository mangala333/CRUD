import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  customerData: any;
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private es: EmployeesService) {
    this.createForm();
  }

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.customerData = res;
      console.log('customerData', (this.customerData));
    },
    error => {
      console.log('ERROR', error);
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      EmployeeName: ['', Validators.required ],
      EmployeeSalary: ['', Validators.required ],
      EmployeeAge: ['', Validators.required ]
    });
  }

  updateEmployee(EmployeeId, EmployeeName, EmployeeSalary, EmployeeAge){
    let employeeData = {
      "name": EmployeeName,
      "salary": EmployeeSalary,
      "age": EmployeeAge
    };
    console.log('Emp data - '+ JSON.stringify(employeeData));
    this.es.updateEmployee(employeeData, EmployeeId).subscribe(resp => {
      alert('Updated Successfully');
    });
  }

}
