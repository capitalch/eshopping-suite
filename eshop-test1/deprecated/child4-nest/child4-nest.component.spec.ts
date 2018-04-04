import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child4NestComponent } from './child4-nest.component';

describe('Child4NestComponent', () => {
  let component: Child4NestComponent;
  let fixture: ComponentFixture<Child4NestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child4NestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child4NestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
