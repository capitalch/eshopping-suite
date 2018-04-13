import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'jx-checkbox',
  template: `
    <div [formGroup]="parent" [ngClass] = "parentClass">
      <label [ngClass] = "labelClass">
        <input [ngClass] = "elementClass" type="checkbox" [id]="layout.id+idx" [formControlName]="layout.id" [value]="layout.value"> {{layout.label}}
      </label>
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </div>`
})
export class JxCheckboxComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  elementClass: string = "";
  parentClass: string = "";
  labelClass: string = "";
  constructor() { }
  ngOnInit() { 
    this.layout.class && (
      (typeof (this.layout.class) == "object")
      && (this.elementClass = this.layout.class.element || ''
        , this.labelClass = this.layout.class.label || ''
        , this.parentClass = this.layout.class.parent || ''
      ) || (this.parentClass = this.layout.class)
    );
  }
}

@Component({
  selector: 'jx-radio',
  template: `
    <fieldset [formGroup]="parent" [ngClass] = "parentClass">
      <legend>{{layout.label}}</legend>
      <div *ngFor="let option of layout.options">
        <input [ngClass] = "elementClass" type="radio" [id]="option.id+idx" [formControlName]="layout.id" [value]="option.value" [name]="layout.id">
        <label [ngClass] = "labelClass" [for]="option.id+idx">{{option.label}}</label>        
      </div>
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </fieldset>`
})
export class JxRadioComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  elementClass: string = "";
  parentClass: string = "";
  labelClass: string = "";
  constructor() { }
  ngOnInit() {
    this.layout.class && (
      (typeof (this.layout.class) == "object")
      && (this.elementClass = this.layout.class.element || ''
        , this.labelClass = this.layout.class.label || ''
        , this.parentClass = this.layout.class.parent || ''
      ) || (this.parentClass = this.layout.class)
    );
   }
}

@Component({
  selector: 'jx-select',
  template: `
    <div [formGroup]="parent" [ngClass] = "parentClass">
      <label [ngClass] = "labelClass">{{layout.label}}</label>
      <select [ngClass] = "elementClass" [formControlName]="layout.id">
        <option *ngFor="let option of options" [value]="option.value" >{{option.name}}
        </option>
      </select>
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </div>
    `
})
export class JxSelectComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  elementClass: string = "";
  parentClass: string = "";
  labelClass: string = "";
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
    
    this.layout.class && (
      (typeof (this.layout.class) == "object")
      && (this.elementClass = this.layout.class.element || ''
        , this.labelClass = this.layout.class.label || ''
        , this.parentClass = this.layout.class.parent || ''
      ) || (this.parentClass = this.layout.class)
    );
  }
}

@Component({
  selector: 'jx-textarea',
  template: `
    <div [formGroup]="parent" [ngClass] = "parentClass">
      <label [ngClass] = "labelClass" [for]="layout.id+idx">{{layout.label}}</label>
      <textarea [ngClass] = "elementClass" [id]="layout.id+idx" [placeholder]="layout.placeholder" [formControlName]="layout.id">{{layout.value}}</textarea>
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </div>`
})

export class JxTextareaComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  elementClass: string = "";
  parentClass: string = "";
  labelClass: string = "";
  constructor() { }
  ngOnInit() {
    this.layout.class && (
      (typeof (this.layout.class) == "object")
      && (this.elementClass = this.layout.class.element || ''
        , this.labelClass = this.layout.class.label || ''
        , this.parentClass = this.layout.class.parent || ''
      ) || (this.parentClass = this.layout.class)
    );
  }
}

@Component({
  selector: 'jx-default',
  template: `
    <div [formGroup]="parent" [ngClass]="parentClass">
      <label [ngClass] ="labelClass" [for]="layout.id+idx">{{layout.label}}</label>
      <input [ngClass] = "elementClass" [type]="layout.type" [id]="layout.id+idx" [placeholder]="layout.placeholder" [formControlName]="layout.id" [value] = "layout.value">
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </div>`
})
export class JxDefaultComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  elementClass: string = "";
  parentClass: string = "";
  labelClass: string = "";
  constructor() { }
  ngOnInit() { 
    this.layout.class && (
      (typeof (this.layout.class) == "object")
      && (this.elementClass = this.layout.class.element || ''
        , this.labelClass = this.layout.class.label || ''
        , this.parentClass = this.layout.class.parent || ''
      ) || (this.parentClass = this.layout.class)
    );
  }
}

