import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5FormComponent } from './html5-form.component';

describe('Html5FormComponent', () => {
  let component: Html5FormComponent;
  let fixture: ComponentFixture<Html5FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
