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

export class JxTextareaComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() {}
}
