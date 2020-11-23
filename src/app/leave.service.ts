import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private baseUrl = 'http://localhost:9195/api/v1/leaves';
  
  //private baseUrl = 'AngularSpringbootAwsMysql-env.eba-kmr54b8b.us-east-2.elasticbeanstalk.com/springboot-crud-rest/api/v1/leaves';
  //private baseUrl = '/springboot-crud-rest/api/v1/leaves';
  static getLeavesList: any;
  
  constructor(private http: HttpClient) { }
  
    getLeave(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
    
    createLeave(leave: Object): Observable<Object> {
      let str=JSON.stringify(leave);
      return this.http.post(`${this.baseUrl}`, leave);
    }
  
    updateLeave(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }
  
    deleteLeave(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
  
    getLeavesList(): Observable<any> {
      let str1=JSON.stringify(this.http.get(`${this.baseUrl}`));   
  
      return this.http.get(`${this.baseUrl}`);
    }
}
