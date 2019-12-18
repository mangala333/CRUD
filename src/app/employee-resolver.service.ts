import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { EmployeesService } from './employees.service';
import { empty, of } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class EmployeeResolverService implements Resolve<any> {
    uri = 'https://dummy.restapiexample.com';
    constructor(private employeeApi: EmployeesService, private http: HttpClient) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.employeeApi.getEmployee().pipe(
    //   catchError((error) => {
    //     return empty();
    //   })
    // );
    return this.http.get(`${this.uri}/api/v1/employees`);
    }
}
