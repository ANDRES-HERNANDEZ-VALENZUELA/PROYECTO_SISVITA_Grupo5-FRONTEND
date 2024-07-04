import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDeCalorComponent } from './mapa-de-calor.component';

describe('MapaDeCalorComponent', () => {
  let component: MapaDeCalorComponent;
  let fixture: ComponentFixture<MapaDeCalorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaDeCalorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapaDeCalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




--------------------------------------------------------------------------


import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'mapas-calor' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mapas-calor');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, mapas-calor');
  });
});
