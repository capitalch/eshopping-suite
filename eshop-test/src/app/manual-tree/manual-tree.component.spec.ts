import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualTreeComponent } from './manual-tree.component';

describe('ManualTreeComponent', () => {
  let component: ManualTreeComponent;
  let fixture: ComponentFixture<ManualTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
