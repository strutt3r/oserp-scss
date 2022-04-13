import { Injectable } from '@angular/core';
import { Observables } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = 'http://localhost:4200/';

var httpLink = {
  getAllEmployee: apiUrl + '/api/employee/getAllEmployee',
  deleteEmployeeById: apiUrl + '/api/employee/deleteEmployeeById',
  getEmployeeById: apiUrl + 'api/employee/getEmployeeDetailById',
  saveEmployee: apiUrl + '/api/employee/saveEmployee',
};

@Injectable({
  providedIn: 'root',
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) {}
  public getAllEmployee(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }
  public deleteEmployeeById(model: any): Observable<any> {
    return this.webApiService.post(
      httpLink.deleteEmployeeById + '?employeeId=' + model,
      ''
    );
  }
  public getEmployeeDetailById(model: any): Observable<any> {
    return this.webApiService.get(
      httpLink.getEmployeeDetailById + '?employeeId=' + model
    );
  }
  public saveEmployee(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }
}
