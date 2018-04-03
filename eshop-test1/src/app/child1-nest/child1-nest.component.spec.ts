import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1NestComponent } from './child1-nest.component';

describe('Child1NestComponent', () => {
  let component: Child1NestComponent;
  let fixture: ComponentFixture<Child1NestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1NestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1NestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
