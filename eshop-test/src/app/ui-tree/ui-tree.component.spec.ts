import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTreeComponent } from './ui-tree.component';

describe('UiTreeComponent', () => {
  let component: UiTreeComponent;
  let fixture: ComponentFixture<UiTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
