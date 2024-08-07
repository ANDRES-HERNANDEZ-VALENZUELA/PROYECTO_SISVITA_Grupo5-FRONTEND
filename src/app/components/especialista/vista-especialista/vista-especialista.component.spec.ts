import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEspecialistaComponent } from './vista-especialista.component';

describe('VistaEspecialistaComponent', () => {
  let component: VistaEspecialistaComponent;
  let fixture: ComponentFixture<VistaEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaEspecialistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
