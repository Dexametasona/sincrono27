import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num1:number=0;
  num2:number=0;
  result!:number;

  operacion(type:string):void{
    if(type==='+') this.result=this.num1+this.num2
    else if(type==='-') this.result=this.num1-this.num2
    else if(type==='*') this.result=this.num1*this.num2
    else if(type==='/') this.result=this.num1/this.num2
  }
}