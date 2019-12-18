import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

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

  // getEmployee() {
  //   return this.http.get(`${this.uri}/api/v1/employees`).pipe(map((res: any) => res));
  // }

  updateEmployee(employee, id) {
    return this.http.put(`${this.uri}/api/v1/update/${id}`, employee);
  }

  deleteEmployee(id) {
    return this.http.delete(`${this.uri}/api/v1/delete/${id}`);
  }
}

@Injectable()
export class MyFirstInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(JSON.stringify(req));
        
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}