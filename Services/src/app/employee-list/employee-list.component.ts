import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
// Testing new commit
@Component({
  selector: 'employee-list',
  template:`<h2>Employee List</h2>
     <ul  *ngFor="let employee of employees">
           <li> {{employee.name}}</li>
        
     </ul>`
     ,
  styles:[]
})
export class EmployeeListComponent implements OnInit {

 /*  public employees=[
         {"id":1,"name":"Andrew","age":30},
         {"id":2,"name":"Brandon","age":25},ng
         {"id":3,"name":"Chirstina","age":26},
         {"id":4,"name":"Elena","age":28}

   ];*/
  
  public employees:any[]=[];
   constructor( private  _employeeService:EmployeeService){}
   ngOnInit(){
       /*  this.employees=this._employeeService.getEmployees();*/
       this._employeeService.getEmployees()
          .subscribe(data=> this.employees=data)
       
   }
}
