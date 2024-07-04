import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavEComponent } from './sidenav-e.component';

describe('SidenavEComponent', () => {
  let component: SidenavEComponent;
  let fixture: ComponentFixture<SidenavEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
