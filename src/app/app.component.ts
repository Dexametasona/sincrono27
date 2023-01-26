import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='Calculadora para testing'
  num1:number=0;
  num2:number=0;
  result!:number;

  operacion(type:string, num1:string, num2:string):number{

    if(type==='+') this.result=Number(num1)+Number(num2)
    else if(type==='-') this.result=Number(num1)-Number(num2)
    else if(type==='*') this.result=Number(num1)*Number(num2)
    else if(type==='/') this.result=Number(num1)/Number(num2)

    return this.result
  }
}