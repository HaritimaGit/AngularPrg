import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2 *ngIf="displayname; else elseBlock">
      Angular Program
  </h2>
  <ng-template #elseBlock>
     <h2>
        Name is hidden
     </h2>
  </ng-template>
  <div *ngIf="displayname;then thenBlock;else elseBlock"></div>
  <ng-template #thenBlock>
     <h2>Angular Program1</h2>
  </ng-template>
  <ng-template #elseBlock>
    <h2>Hidden</h2>
  </ng-template> 
  

  <div [ngSwitch]="Color">
     <div *ngSwitchCase="'red'">You picked red</div>
     <div *ngSwitchCase="'blue'">You picked blue</div>
     <div *ngSwitchCase="'green'">You picked green</div>
     <div *ngSwitchDefault>Picked again</div> 
  </div>
  <div *ngFor="let color of colors; index as i">
      <h2>{{i}}{{color}}</h2>
  </div>
  <div *ngFor="let color of colors; last as l">
  <h2>{{l}}{{color}}</h2>
</div>
<div *ngFor="let color of colors; odd as o">
<h2>{{o}}{{color}}</h2>
</div>
<div *ngFor="let color of colors; even as e">
<h2>{{e}}{{color}}</h2>
</div>

  `
  ,
  styles:[]
})  
export class TestComponent implements OnInit {
  public colors=["red","blue","green","yellow"];
  public Color="red";
  public displayname=true;
  constructor(){}
  ngOnInit(){}
  

}
