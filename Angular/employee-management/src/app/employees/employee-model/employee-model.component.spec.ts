import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModelComponent } from './employee-model.component';

describe('EmployeeModelComponent', () => {
  let component: EmployeeModelComponent;
  let fixture: ComponentFixture<EmployeeModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
