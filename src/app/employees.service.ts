import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml',
    'Authorization': 'jwt-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  uri = 'https://dummy.restapiexample.com';
  constructor(private http: HttpClient) { }

  createEmployee(EmployeeName, EmployeeSalary, EmployeeAge) {
    const obj = {
      "name":EmployeeName,
      "salary":EmployeeSalary,
      "age":EmployeeAge
    };
    console.log(obj);
    return this.http.post(`${this.uri}/api/v1/create`, obj);
  }

  // resolve(): Observable<any> {
  //   let newsUrl = 'https://httpbin.org/post';
  //   let news = 'The sky is blue'; //Mock data to be returned by test API
  //   const obj = {
  //     "name":EmployeeName,
  //     "salary":EmployeeSalary,
  //     "age":EmployeeAge
  //   };
  //   console.log(obj);
  //   return this.http.post(`${this.uri}/api/v1/create`, obj).pipe(
  //     map( (dataFromApi) => dataFromApi ),
  //     catchError( (err) => Observable.throw(err.json().error) )
  //   )
  // }

  // getEmployee() {
  //   return this.http.get(`${this.uri}/api/v1/employees`);
  //   //return this.http.get(`${this.uri}/api/v1/employees`).pipe(map((res: any) => res));
  // }

  updateEmployee(employee, id) {
    return this.http.put(`${this.uri}/api/v1/update/${id}`, employee);
  }

  deleteEmployee(id) {
    return this.http.delete(`${this.uri}/api/v1/delete/${id}`);
  }
}
