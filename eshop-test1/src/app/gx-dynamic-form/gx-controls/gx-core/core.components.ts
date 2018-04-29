import { Component, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GxService } from "../../gx.service";
import { BrokerService } from "../../../broker.service";

@Component({
    selector: 'gx-textarea',
    template: `
      <div [formGroup]="parent">
        <label [for]="layout.id">{{layout.label}}</label>
        <textarea [id]="layout.id" [placeholder]="layout.placeholder" 
            [formControlName]="layout.id">{{layout.value}}
        </textarea>
        <gx-error [layout]="layout" [parent]="parent"></gx-error>
      </div>`
})
//   
export class GxTextareaComponent {
    @Input() layout: any;
    // @Input() idx: string;
    @Input() parent: FormGroup;
    classes: any = {};
    constructor(
        private gxService: GxService
        ,
        private fb: FormBuilder
    ) { }
    ngOnInit() {
        //   this.classes = this.jxService.getClasses(this.layout, this.parent);
        // let xControl = this.fb.control(this.layout.value || "");
        // this.parent.setControl(this.layout.id, xControl);
        
        this.gxService.createGenericControl(this.layout, this.parent);
    }
}

@Component({
    selector: 'gx-button',
    template: `
      <div [formGroup]="parent" [ngClass] = "classes.parentClass">
          <button (click) = "buttonClicked()" [ngClass] = "classes.elementClass" type="button" [id]="layout.id+idx||''"> {{layout.label}}</button>
      </div>`
})
export class GxButtonComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    classes: any = {}
    constructor(private brokerService: BrokerService
        , private gxService: GxService
        
    ) { }
    ngOnInit() {
        //   this.classes = this.jxService.getClasses(this.layout, this.parent);
    }

    buttonClicked() {
      this.gxService.processForm(this.parent);
      if (this.layout.validateForm) {
        this.gxService.validateAllFormFields(this.parent);
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