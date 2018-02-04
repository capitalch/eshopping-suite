import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartUnitComponent } from './cart-unit.component';

describe('CartUnitComponent', () => {
  let component: CartUnitComponent;
  let fixture: ComponentFixture<CartUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
