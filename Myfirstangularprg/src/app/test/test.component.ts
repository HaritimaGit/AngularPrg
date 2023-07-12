import { Component } from '@angular/core';

@Component({
  selector:'[app-test]',
  template: `<div>
                 Inline template
                 hello
                 My first program in angular
                 </div>`,
  styles: [`div{

    color: red;
  }`]
})
export class TestComponent {

}
