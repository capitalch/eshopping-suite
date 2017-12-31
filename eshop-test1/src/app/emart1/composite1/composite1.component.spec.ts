import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Composite1Component } from './composite1.component';

describe('Composite1Component', () => {
  let component: Composite1Component;
  let fixture: ComponentFixture<Composite1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Composite1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Composite1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
