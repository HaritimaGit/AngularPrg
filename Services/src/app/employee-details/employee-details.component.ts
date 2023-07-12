import { Component ,OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-details',
  template:`
  <h2>Employee Details </h2>
  <ul   *ngFor="let employee of employees">
     <li>
     {{employee.id}}.{{employee.name}}-{{employee.age}}
     </li>
  </ul>  
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit 
{
 /* public employees=[
    {"id":1,"name":"Andrew","age":30},
    {"id":2,"name":"Brandon","age":25},
    {"id":3,"name":"Chirstina","age":26},
    {"id":4,"name":"Elena","age":28}

];*/
public employees:any[]=[];
  constructor(private _employeeService: EmployeeService){}
  ngOnInit(){
    /*this.employees=this._employeeService.getEmployees();*/
    this._employeeService.getEmployees()
       .subscribe(data=>this.employees=data);
  }


}
