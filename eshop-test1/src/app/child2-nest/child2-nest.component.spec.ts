import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2NestComponent } from './child2-nest.component';

describe('Child2NestComponent', () => {
  let component: Child2NestComponent;
  let fixture: ComponentFixture<Child2NestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2NestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2NestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
