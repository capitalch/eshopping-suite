import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
  
    
  @Component({
    selector: 'jx-select',
    template: `
    <ng-container [formGroup]="parent">
      <label>{{layout.label}}</label>
      <select [formControlName]="layout.id" class="field-select">
        <option *ngFor="let option of layout.options" [value]="option.value" [label]="option.label">
        </option>
      </select>
      <jx-error [layout]="layout" [control]="parent.get(layout.id)"></jx-error>
    </ng-container>
    `
  })
  export class JxSelectComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    constructor() { }
    ngOnInit() {}
  }