import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicioLoginComponent } from './pagina-inicio-login.component';

describe('PaginaInicioLoginComponent', () => {
  let component: PaginaInicioLoginComponent;
  let fixture: ComponentFixture<PaginaInicioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaInicioLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaInicioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
