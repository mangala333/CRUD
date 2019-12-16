import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  loading: boolean = false;
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private es: EmployeesService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      EmployeeName: ['', Validators.required ],
      EmployeeSalary: ['', Validators.required ],
      EmployeeAge: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  createEmployee(EmployeeName, EmployeeSalary, EmployeeAge){
    this.loading = true;
    //this.es.createEmployee(EmployeeName, EmployeeSalary, EmployeeAge);
    this.es.createEmployee(EmployeeName, EmployeeSalary, EmployeeAge).subscribe(
        success => (alert("Created Successfully"),
        this.angForm.reset(), this.loading = false),
        error => alert(error)
    );
  }

}
