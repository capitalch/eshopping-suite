import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jx-checkbox',
  template: `
  <ng-container [formGroup]="parent">
    <label>
      <input type="checkbox" [id]="layout.id+idx" [formControlName]="layout.id" [value]="layout.value"> {{layout.label}}
    </label>
  </ng-container>`
})
export class JxCheckboxComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() {}
}