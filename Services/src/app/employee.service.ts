import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployee} from './employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public _url : string='../assets/Data/employee.json'  ;

  constructor( private http:HttpClient) { }
  getEmployees():Observable<IEmployee[]>
  {
     /* return[
        {"id":1,"name":"Andrew","age":30},
        {"id":2,"name":"Brandon","age":25},
        {"id":3,"name":"Chirstina","age":26},
        {"id":4,"name":"Elena","age":28}
      ];*/
      
      return this.http.get<IEmployee[]>(this._url);

  }
}
