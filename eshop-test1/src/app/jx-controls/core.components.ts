import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'jx-textarea',
    template: `
    <ng-container [formGroup]="parent">
      <label [for]="layout.id+idx">{{layout.label}}</label>
      <textarea class="field-long" [id]="layout.id+idx" [placeholder]="layout.placeholder" [formControlName]="layout.id">{{layout.value}}</textarea>
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </ng-container>`
  })
  
  export class JxTextareaComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    constructor() { }
    ngOnInit() {}
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
  export class JxCheckboxComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    constructor() { }
    ngOnInit() {}
  }

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

  @Component({
    selector: 'jx-select',
    template: `
    <ng-container [formGroup]="parent">
      <label>{{layout.label}}</label>
      <select [formControlName]="layout.id" class="field-select">
        <option *ngFor="let option of layout.options" [value]="option.value" [label]="option.label">
        </option>
      </select>
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
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

  @Component({
    selector: 'jx-default',
    template: `
    <ng-container [formGroup]="parent">
      <label [for]="layout.id+idx">{{layout.label}}</label>
      <input [type]="layout.type" [id]="layout.id+idx" [placeholder]="layout.placeholder" [formControlName]="layout.id">
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </ng-container>`
  })
  export class JxDefaultComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    constructor() { }
    ngOnInit() {}
  }

