import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEspecialistaComponent } from './body-especialista.component';

describe('BodyEspecialistaComponent', () => {
  let component: BodyEspecialistaComponent;
  let fixture: ComponentFixture<BodyEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyEspecialistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
