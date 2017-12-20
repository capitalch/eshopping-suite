import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JproductDetailsComponent } from './jproduct-details.component';

describe('JproductDetailsComponent', () => {
  let component: JproductDetailsComponent;
  let fixture: ComponentFixture<JproductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JproductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JproductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
