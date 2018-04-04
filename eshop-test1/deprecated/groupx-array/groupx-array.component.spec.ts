import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupxArrayComponent } from './groupx-array.component';

describe('GroupxArrayComponent', () => {
  let component: GroupxArrayComponent;
  let fixture: ComponentFixture<GroupxArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupxArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupxArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
