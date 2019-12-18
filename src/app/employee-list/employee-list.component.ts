import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeResolverService } from '../employee-resolver.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees;
  name; salary;
  age;
  cols: any[];

  constructor(private _activatedroute : ActivatedRoute, private router: Router, private es: EmployeesService) { }

  ngOnInit() {
    // this.es.getEmployee().subscribe(employees => {
    //   console.log('employees list - ' + JSON.stringify(employees));
    //   this.employees = employees.sort((a,b)=> b.id-a.id);
    // });
    this.employees = this._activatedroute.snapshot.data['employeeData'];

    this.cols = [
      { field: 'employee_name', header: 'Name' },
      { field: 'employee_salary', header: 'Salary' },
      { field: 'employee_age', header: 'Age' }
    ];
  }

  btnClick(rowVal) {
    let route = this.router.config.find(r => r.path === 'employee/edit/:id');
    route.data =  rowVal;
    // using routerLink
    this.router.navigateByUrl(`${'employee/edit'}/${rowVal.id}`); 
    this.router.navigate([`${'employee/edit'}/${rowVal.id}`]);
  };

  updateTraveller(id){
    let traveller = {
      "name": this.name,
      "salary": this.salary,
      "age": this.age
    };
  
    this.es.updateEmployee(traveller, id)
      .subscribe(
        success => alert("Done"),
        error => alert(error)
      );
  }

  deleteEmp(id){
    // this.es.getEmployee().subscribe(employees => {
    //   console.log('employees list - ' + JSON.stringify(employees));
    // });
    this.es.deleteEmployee(id).subscribe(res => {
      this.employees = this._activatedroute.snapshot.data['employeeData'];
      // this.es.getEmployee().subscribe(employees => {
      //   this.employees = employees;
      //   alert(res['success'].text);
      // });
    });
  }

}
