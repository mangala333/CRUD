import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees;
  name; salary;
  age;
  constructor(private route: ActivatedRoute, private router: Router, private es: EmployeesService) { }

  ngOnInit() {
    this.es.getEmployee().subscribe(employees => {
      console.log('employees list - ' + JSON.stringify(employees));
      this.employees = employees;
    });
  }

  btnClick(rowVal) {
      let route = this.router.config.find(r => r.path === 'employee/edit/:id');
      route.data =  rowVal;
  
    // START: One way of using routerLink
     this.router.navigateByUrl(`${'employee/edit'}/${rowVal.id}`); 
     // Uncomment this line and check the result
    // END: One way of using routerLink */
  
     // ---- START: Another way of using routerLink
    // this.router.navigate(['app-customer-details/' + rowVal.id]);
    // ---- END: Another way of using routerLink 
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
      console.log('employees list - ' + JSON.stringify(res));
      this.es.getEmployee().subscribe(employees => {
        this.employees = employees;
        alert(res['success'].text);
      });
    });
  }

  getEmployee(){
    this.es.getEmployee().subscribe(employees => {
      console.log('employees list - ' + JSON.stringify(employees));
      this.employees = employees;
    });
  }

}
