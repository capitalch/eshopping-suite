import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jx-default',
  template: `
  <ng-container [formGroup]="parent">
    <label [for]="layout.id+idx">{{layout.label}}</label>
    <input [type]="layout.type" [id]="layout.id+idx" [placeholder]="layout.placeholder" [formControlName]="layout.id">
    <jx-error [layout]="layout" [control]="parent.get(layout.id)"></jx-error>
  </ng-container>`
})
export class JxDefaultComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() {}
}