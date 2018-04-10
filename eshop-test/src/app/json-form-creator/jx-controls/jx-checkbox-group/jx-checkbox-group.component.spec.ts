import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JxCheckboxGroupComponent } from './jx-checkbox-group.component';

describe('JxCheckboxGroupComponent', () => {
  let component: JxCheckboxGroupComponent;
  let fixture: ComponentFixture<JxCheckboxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JxCheckboxGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JxCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
