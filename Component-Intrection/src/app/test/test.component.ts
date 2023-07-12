import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
     <h2>{{"Hello"+parentData}}</h2>
     <h2>{{"Hello"+ name}}</h2>
     <button (click)="fireEvent()"> Send Message</button>

     <h2>{{ name1 }}</h2>
     <h2>{{name1 | lowercase}}</h2>
     <h2>{{name1 | uppercase}}</h2>
     <h2>{{message | titlecase}}</h2>
     <h2>{{name1 | slice:3}}</h2>
     <h2>{{name1 | slice:3:5}}</h2>
     <h2>{{person | json}} </h2>
     <h2>{{5.678 | number:'1.2-3'}} </h2>
     <h2>{{5.678 | number:'3.4-5'}} </h2>
     <h2>{{5.678 | number:'3.1-2'}} </h2>
     <h2>{{0.25 | percent}} </h2>
     <h2>{{0.25 | currency}} </h2>
     <h2>{{0.25 | currency:'GBP' }} </h2>
     <h2>{{0.25 | currency:'GBP':'code' }} </h2>
     <h2>{{0.25 | currency:'EUR' }} </h2>
     <h2>{{0.25 | currency:'EUR':'code' }} </h2>
     <h2>{{0.25 | currency:'INR' }} </h2>
     <h2>{{ date}} </h2>
     <h2>{{ date |date:'short'}} </h2>
     <h2>{{ date |date:'shortDate'}} </h2>
     <h2>{{ date | date:'shortTime'}} </h2>




     
  `,
  styles:[]
})
export class TestComponent implements OnInit {

    @Input() public parentData: any;
    @Input('parentData') public name:any;
    @Output() public childEvent=new EventEmitter();
    constructor(){}
    ngOnInit() {
      
    }
    fireEvent(){
      this.childEvent.emit('Button Event ');
    }
public name1="Angular Program Pipe";
public message="Welcome to Angular Program Pipe";
public person={
     "firstName":"John",
     "lastName":"Doe"

}
public date=new Date();



}
