import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbodyComponent } from './jbody.component';

describe('JbodyComponent', () => {
  let component: JbodyComponent;
  let fixture: ComponentFixture<JbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
