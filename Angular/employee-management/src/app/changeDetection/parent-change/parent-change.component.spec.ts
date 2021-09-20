import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChangeComponent } from './parent-change.component';

describe('ParentChangeComponent', () => {
  let component: ParentChangeComponent;
  let fixture: ComponentFixture<ParentChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
