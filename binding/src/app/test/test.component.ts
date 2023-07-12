import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<h2>
              Welcome{{name}}
              </h2>
            <h2>{{2+2}}</h2>
            <h2>
              {{"Welcome"+name}}
            </h2>
            <h2>
            {{name.length}}
            </h2>
            <h2>
            {{name.toUpperCase()}}
            </h2>
            <h2>
               {{greetUser()}}
            </h2>
            <h2>
               {{siteUrl}}
            </h2>
            <h2>
            <input [id]="myId" type="text" value="Angular">
            <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Angular">
            
            </h2>
            <h2 clas="text-success">Angular               
            </h2>
            <h2 [ngClass]="messageClasses">AngularProgram</h2>
            
           
            <h2 [style.color]="highlightColor">Style Binding  2</h2>
            <h2 [style.color]="hasError?'red':'green'">Style Binding</h2>

            <button (click)="onClick()">Greet</button>
            <input #myInput type="text"/>
            <button (click)="logMessage(myInput.value)">Log</button>
            <input [(ngModel)]="name1" type="text"/>
            {{name1}}
            `           ,
  styles: [`
.text-success{
      color : green ;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }`
]
})
export class TestComponent implements OnInit{
  public name="Angular Program";
  public name1="";
  public myId="testId";
  public isDisabled="false";
  public successClass="text-success";
  public hasError="false";
  public isSpecial="true";
  public highlightColor="brown";
  public messageClasses={
        "text-success":!this.hasError,
        "text-danger":this.hasError,
        "text-special":this.isSpecial
  }



  constructor(){}
  ngOnInit(){}
  greetUser(){
    return   "hello"+ this.name;
  }
  onClick(){console.log('Welcome to Angular Program')}
  public siteUrl=window.location.href;
  logMessage(value:any){console.log(value);}
}
