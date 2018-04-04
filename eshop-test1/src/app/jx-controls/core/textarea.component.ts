import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jx-textarea',
  template: `
  <ng-container [formGroup]="parent">
    <label [for]="layout.id+idx">{{layout.label}}</label>
    <textarea class="field-long" [id]="layout.id+idx" [placeholder]="layout.placeholder" [formControlName]="layout.id">{{layout.value}}</textarea>
    <jx-error [layout]="layout" [control]="parent.get(layout.id)"></jx-error>
  </ng-container>`
})
export class TextareaComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  constructor() { }
}

@Component({
  selector: 'jx-checkbox',
  template: `
  <ng-container [formGroup]="parent">
    <label>
      <input type="checkbox" [id]="layout.id+idx" [formControlName]="layout.id" [value]="layout.value"> {{layout.label}}
    </label>
  </ng-container>`
})
export class CheckboxComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  constructor() { }
}
