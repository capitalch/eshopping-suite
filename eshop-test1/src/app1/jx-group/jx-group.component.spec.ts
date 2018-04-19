import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JxGroupComponent } from './jx-group.component';

describe('JxGroupComponent', () => {
  let component: JxGroupComponent;
  let fixture: ComponentFixture<JxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JxGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
