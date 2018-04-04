import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChildComponent } from './group-child.component';

describe('GroupChildComponent', () => {
  let component: GroupChildComponent;
  let fixture: ComponentFixture<GroupChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
