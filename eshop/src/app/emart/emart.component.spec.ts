import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmartComponent } from './emart.component';

describe('EmartComponent', () => {
  let component: EmartComponent;
  let fixture: ComponentFixture<EmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
