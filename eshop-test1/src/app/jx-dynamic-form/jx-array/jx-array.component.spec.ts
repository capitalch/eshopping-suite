import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JxArrayComponent } from './jx-array.component';

describe('JxArrayComponent', () => {
  let component: JxArrayComponent;
  let fixture: ComponentFixture<JxArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JxArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JxArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
