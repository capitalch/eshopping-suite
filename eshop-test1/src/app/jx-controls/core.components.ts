import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';
import { Observable } from 'rxjs/Observable';
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
  ngOnInit() { }
}

@Component({
  selector: 'jx-checkbox',
  template: `
    <ng-container [formGroup]="parent">
      <label>
        <input type="checkbox" [id]="layout.id+idx" [formControlName]="layout.id" [value]="layout.value"> {{layout.label}}
      </label>
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </ng-container>`
})
export class JxCheckboxComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() { }
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
  ngOnInit() { }
}

@Component({
  selector: 'jx-select',
  template: `
    <ng-container [formGroup]="parent">
      <label>{{layout.label}}</label>
      <select [formControlName]="layout.id" class="field-select">
        <option *ngFor="let option of options" [value]="option.value" >{{option.name}}
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
  options: any;
  constructor(private jxService: JxService, private ref: ChangeDetectorRef) {

  }
  ngOnInit() {
    //logic for options being an array, a function or an observable
    if (typeof (this.layout.options) == "string") {
      let options = this.jxService.getOption(this.layout.options);
      if (options instanceof Observable) {
        options.subscribe(x => {
          this.options = x;
          this.ref.markForCheck(); //forceful change detector
        });
      } else {
        this.options = options;
      }
    } else {
      this.options = this.layout.options;
    }
  }
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
  ngOnInit() { }
}

