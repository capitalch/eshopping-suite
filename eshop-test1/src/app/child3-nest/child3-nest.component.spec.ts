import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3NestComponent } from './child3-nest.component';

describe('Child3NestComponent', () => {
  let component: Child3NestComponent;
  let fixture: ComponentFixture<Child3NestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child3NestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child3NestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
