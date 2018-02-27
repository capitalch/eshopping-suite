import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formio1Component } from './formio1.component';

describe('Formio1Component', () => {
  let component: Formio1Component;
  let fixture: ComponentFixture<Formio1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formio1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
