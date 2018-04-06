import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JxStubGroupComponent } from './jx-stub-group.component';

describe('JxStubGroupComponent', () => {
  let component: JxStubGroupComponent;
  let fixture: ComponentFixture<JxStubGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JxStubGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JxStubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
