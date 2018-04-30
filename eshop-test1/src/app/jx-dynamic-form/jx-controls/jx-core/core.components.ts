import { Component, OnInit, Input, ChangeDetectorRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { JxService } from '../../jx-service/jx.service';
import { Observable } from 'rxjs/Observable';
import { JxCheckboxGroupComponent } from '../jx-checkbox-group/jx-checkbox-group.component';
import { JxMatCheckboxComponent, JxMatInputComponent, JxMatRadioComponent, JxMatSelectComponent, JxMatTextAreaComponent, JxMatDatePickerComponent } from '../jx-mat/mat.components';
import { JxGroupComponent } from '../../jx-group/jx-group.component';
import { JxArrayComponent } from '../../jx-array/jx-array.component';
import { BrokerService } from '../../../broker.service';


@Component({
  selector: 'jx-anchor',
  template: `
    <div [formGroup]="parent" [ngClass] = "classes.parentClass">
        <a [ngClass] = "classes.elementClass" [href]="layout.href" [id]="layout.id+idx||''"> {{layout.label}}</a>
    </div>`
})
export class JxAnchorComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  classes: any = {}
  constructor(private brokerService: BrokerService, private jxService: JxService) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
  }
}

@Component({
  selector: 'jx-button',
  template: `
    <div [formGroup]="parent" [ngClass] = "classes.parentClass">
        <button (click) = "buttonClicked()" [ngClass] = "classes.elementClass" type="button" [id]="layout.id+idx||''"> {{layout.label}}</button>
    </div>`
})
export class JxButtonComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  classes: any = {}
  constructor(private brokerService: BrokerService, private jxService: JxService) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
  }

  buttonClicked() {
    this.jxService.processForm(this.parent);
    if (this.layout.validateForm) {
      this.jxService.validateAllFormFields(this.parent);
      if (this.parent.valid && (!this.parent.pending)) {
        this.brokerService.emit(this.layout.actionId, this.parent);
      } else {
        console.log("Invalid form");
      }
    } else {
      this.brokerService.emit(this.layout.actionId, this.parent);
    }
  }
}

@Component({
  selector: 'jx-submit',
  template: `
    <div [formGroup]="parent" [ngClass] = "classes.parentClass">
        <button (click) = "submit()" [ngClass] = "classes.elementClass" type="submit" [id]="layout.id+idx||''"> {{layout.label}}</button>
    </div>`
})
export class JxSubmitComponent {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  classes: any = {}
  constructor(private jxService: JxService, private brokerService: BrokerService) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
  }

  submit() {
    this.jxService.processForm(this.parent);
    this.jxService.validateAllFormFields(this.parent);
    this.parent.valid
      ? this.brokerService.emit(this.layout.actionId, this.parent)
      : console.log("Invalid form");
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
  constructor(private jxService: JxService) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
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
  constructor(private jxService: JxService) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
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
  constructor(private jxService: JxService) { }
  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
  }
}

// @Component({
//   selector: 'jx-default',
//   template: `
//     <div [formGroup]="parent" [ngClass]="classes.parentClass">
//       <label [ngClass] ="classes.labelClass" [for]="layout.id+idx">{{layout.label}}</label>
//       <input [ngClass] = "classes.elementClass" [type]="layout.type" [id]="layout.id+idx" [placeholder]="layout.placeholder" [formControlName]="layout.id" [value] = "layout.value">
//       <jx-error [layout]="layout" [parent]="parent"></jx-error>
//     </div>`
// })
// export class JxDefaultComponent {
//   @Input() layout: any;
//   @Input() idx: string;
//   @Input() parent: FormGroup;
//   classes: any = {};
//   constructor(private jxService: JxService) { }
//   ngOnInit() {
//     this.classes = this.jxService.getClasses(this.layout, this.parent);
//   }
// }

