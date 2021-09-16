import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHttpComponent } from './employee-http.component';

describe('EmployeeHttpComponent', () => {
  let component: EmployeeHttpComponent;
  let fixture: ComponentFixture<EmployeeHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
