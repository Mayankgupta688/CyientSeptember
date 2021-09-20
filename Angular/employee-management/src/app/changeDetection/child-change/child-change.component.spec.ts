import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChangeComponent } from './child-change.component';

describe('ChildChangeComponent', () => {
  let component: ChildChangeComponent;
  let fixture: ComponentFixture<ChildChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
