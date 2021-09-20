import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleApplyComponent } from './style-apply.component';

describe('StyleApplyComponent', () => {
  let component: StyleApplyComponent;
  let fixture: ComponentFixture<StyleApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
