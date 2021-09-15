import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementBootstrapComponent } from './implement-bootstrap.component';

describe('ImplementBootstrapComponent', () => {
  let component: ImplementBootstrapComponent;
  let fixture: ComponentFixture<ImplementBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
