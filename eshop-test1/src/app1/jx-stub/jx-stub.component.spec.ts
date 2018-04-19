import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JxStubComponent } from './jx-stub.component';

describe('JxStubComponent', () => {
  let component: JxStubComponent;
  let fixture: ComponentFixture<JxStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JxStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JxStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
