import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Calculadora para testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Calculadora para testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Calculadora para testing');
  });

  it(`test funcion con suma espera un 9`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {op:'+', valor1: '4', valor2: '5'};
    const expectedResult = 9;

    const result = app.operacion(mockeData.op,mockeData.valor1, mockeData.valor2);
    expect(result).toEqual(expectedResult);
    
  });
  it(`test funcion con resta espera un 2`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {op:'-', valor1: '7', valor2: '5'};
    const expectedResult = 2;

    const result = app.operacion(mockeData.op,mockeData.valor1, mockeData.valor2);
    expect(result).toEqual(expectedResult);
    
  });
  it(`test funcion con division espera un 2`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {op:'/', valor1: '10', valor2: '5'};
    const expectedResult = 2;

    const result = app.operacion(mockeData.op,mockeData.valor1, mockeData.valor2);
    expect(result).toEqual(expectedResult);
    
  });
  it(`test funcion con multiplicacion espera un 20`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {op:'*', valor1: '4', valor2: '5'};
    const expectedResult = 20;

    const result = app.operacion(mockeData.op,mockeData.valor1, mockeData.valor2);
    expect(result).toEqual(expectedResult);
    
  });

});
