import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JxChildrenComponent } from './jx-children.component';

describe('JxChildrenComponent', () => {
  let component: JxChildrenComponent;
  let fixture: ComponentFixture<JxChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JxChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JxChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
