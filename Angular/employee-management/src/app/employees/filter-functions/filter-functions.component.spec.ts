import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFunctionsComponent } from './filter-functions.component';

describe('FilterFunctionsComponent', () => {
  let component: FilterFunctionsComponent;
  let fixture: ComponentFixture<FilterFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
