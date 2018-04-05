import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jx-radio',
  template: `
  <fieldset [formGroup]="parent">
    <legend>{{layout.label}}</legend>
    <ng-container *ngFor="let option of layout.options">
      <input type="radio" [id]="option.id+idx" [formControlName]="layout.id" [value]="option.value" [name]="layout.id">
      <label [for]="option.id+idx">{{option.label}}</label>
    </ng-container>
  </fieldset>`
})
export class JxRadioComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() {}
}