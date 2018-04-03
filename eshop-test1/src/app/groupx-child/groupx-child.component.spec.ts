import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupxChildComponent } from './groupx-child.component';

describe('GroupxChildComponent', () => {
  let component: GroupxChildComponent;
  let fixture: ComponentFixture<GroupxChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupxChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupxChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
