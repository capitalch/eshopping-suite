import { Component, OnInit, Input, ChangeDetectorRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';
import { Observable } from 'rxjs/Observable';
import { JxCheckboxGroupComponent } from './jx-checkbox-group/jx-checkbox-group.component';

@Component({
  selector: 'jx-dynamic'
  , template: `
    <div [ngClass] = "classes.parentClass">
     
    </div>`
})
export class JxDynamicComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  component;
  components: any = {
    checkbox: JxCheckboxComponent
    , textarea: JxTextareaComponent
    , radio: JxRadioComponent
    , select: JxSelectComponent
    , checkboxGroup:JxCheckboxGroupComponent
  }
  classes: any = {}
  constructor(private jxService: JxService
    , private resolver: ComponentFactoryResolver
    , private container: ViewContainerRef
  ) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
    const component = this.components[this.layout.type];// JxCheckboxComponent;
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.layout = this.layout;
    this.component.instance.idx = this.idx;
    this.component.instance.parent = this.parent;
  }
}

@Component({
  selector: 'jx-checkbox',
  template: `
    <div [formGroup]="parent" [ngClass] = "classes.parentClass">
      <label [ngClass] = "classes.labelClass">
        <input [ngClass] = "classes.elementClass" type="checkbox" [id]="layout.id+idx" [formControlName]="layout.id" [value]="layout.value"> {{layout.label}}
      </label>
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </div>`
})
export class JxCheckboxComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  classes: any = {}
  // elementClass: string = "";
  // parentClass: string = "";
  // labelClass: string = "";
  constructor(private jxService: JxService) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
    // this.layout.class && (
    //   (typeof (this.layout.class) == "object")
    //   && (this.elementClass = this.layout.class.element || ''
    //     , this.labelClass = this.layout.class.label || ''
    //     , this.parentClass = this.layout.class.parent || ''
    //   ) || (this.parentClass = this.layout.class)
    // );
  }
}

@Component({
  selector: 'jx-radio',
  template: `
    <fieldset [formGroup]="parent" [ngClass] = "classes.parentClass">
      <legend>{{layout.label}}</legend>
      <div *ngFor="let option of layout.options">
        <input [ngClass] = "classes.elementClass" type="radio" [id]="option.id+idx" [formControlName]="layout.id" [value]="option.value" [name]="layout.id">
        <label [ngClass] = "classes.labelClass" [for]="option.id+idx">{{option.label}}</label>        
      </div>
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </fieldset>`
})
export class JxRadioComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  classes: any = {};
  // elementClass: string = "";
  // parentClass: string = "";
  // labelClass: string = "";
  constructor(private jxService: JxService) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
    // this.layout.class && (
    //   (typeof (this.layout.class) == "object")
    //   && (this.elementClass = this.layout.class.element || ''
    //     , this.labelClass = this.layout.class.label || ''
    //     , this.parentClass = this.layout.class.parent || ''
    //   ) || (this.parentClass = this.layout.class)
    // );
  }
}

@Component({
  selector: 'jx-select',
  template: `
    <div [formGroup]="parent" [ngClass] = "classes.parentClass">
      <label [ngClass] = "classes.labelClass">{{layout.label}}</label>
      <select [ngClass] = "classes.elementClass" [formControlName]="layout.id">
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
  // elementClass: string = "";
  // parentClass: string = "";
  // labelClass: string = "";
  classes: any = {};
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
    this.classes = this.jxService.getClasses(this.layout, this.parent);
    // this.layout.class && (
    //   (typeof (this.layout.class) == "object")
    //   && (this.elementClass = this.layout.class.element || ''
    //     , this.labelClass = this.layout.class.label || ''
    //     , this.parentClass = this.layout.class.parent || ''
    //   ) || (this.parentClass = this.layout.class)
    // );
  }
}

@Component({
  selector: 'jx-textarea',
  template: `
    <div [formGroup]="parent" [ngClass] = "classes.parentClass" >
      <label [ngClass] = "classes.labelClass" [for]="layout.id+idx">{{layout.label}}</label>
      <textarea   [ngClass] = "classes.elementClass" [id]="layout.id+idx" [placeholder]="layout.placeholder" [formControlName]="layout.id">{{layout.value}}</textarea>
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </div>`
})

export class JxTextareaComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  classes: any = {};
  // elementClass: string = "";
  // parentClass: string = "";
  // labelClass: string = "";
  constructor(private jxService: JxService) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
    // this.layout.class && (
    //   (typeof (this.layout.class) == "object")
    //   && (this.elementClass = this.layout.class.element || ''
    //     , this.labelClass = this.layout.class.label || ''
    //     , this.parentClass = this.layout.class.parent || ''
    //   ) || (this.parentClass = this.layout.class)
    // );
  }
}

@Component({
  selector: 'jx-default',
  template: `
    <div [formGroup]="parent" [ngClass]="classes.parentClass">
      <label [ngClass] ="classes.labelClass" [for]="layout.id+idx">{{layout.label}}</label>
      <input [ngClass] = "classes.elementClass" [type]="layout.type" [id]="layout.id+idx" [placeholder]="layout.placeholder" [formControlName]="layout.id" [value] = "layout.value">
      <jx-error [layout]="layout" [parent]="parent"></jx-error>
    </div>`
})
export class JxDefaultComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  classes: any = {};
  // elementClass: string = "";
  // parentClass: string = "";
  // labelClass: string = "";
  constructor(private jxService: JxService) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
  }
}

