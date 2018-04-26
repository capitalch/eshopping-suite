import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JxFormComponent } from './jx-form.component';

describe('JxFormComponent', () => {
  let component: JxFormComponent;
  let fixture: ComponentFixture<JxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
