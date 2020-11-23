import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private baseUrl = 'http://localhost:9194/api/v1/employees';
  //private baseUrl = 'AngularSpringbootAwsMysql-env.eba-kmr54b8b.us-east-2.elasticbeanstalk.com/springboot-crud-rest/api/v1/employees';
  //private baseUrl = '/springboot-crud-rest/api/v1/employees';
  static getEmployeesList: any;

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  

  createEmployee(employee: Object): Observable<Object> {
    
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
