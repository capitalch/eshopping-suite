import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonxFormComponent } from './jsonx-form.component';

describe('JsonxFormComponent', () => {
  let component: JsonxFormComponent;
  let fixture: ComponentFixture<JsonxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
