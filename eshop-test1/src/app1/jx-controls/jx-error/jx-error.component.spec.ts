import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JxErrorComponent } from './jx-error.component';

describe('JxErrorComponent', () => {
  let component: JxErrorComponent;
  let fixture: ComponentFixture<JxErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JxErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JxErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
