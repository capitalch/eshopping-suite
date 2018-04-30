import { Component, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GxService } from "../../gx.service";
import { BrokerService } from "../../../broker.service";

@Component({
    selector: 'gx-textarea',
    template: `
      <ng-container [formGroup]="parent">
        <label [for]="layout.id">{{layout.label}}</label>
        <textarea [id]="layout.id" [class]="layout.id" 
            [placeholder]="layout.placeholder" [ngStyle]="layout.style"
            [formControlName]="layout.id">{{layout.value}}
        </textarea>
        <gx-error [layout]="layout" [parent]="parent"></gx-error>
      </ng-container>`
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
        <button (click) = "buttonClicked()" 
            type="button" [id]="layout.id+idx||''"> 
                {{layout.label}}
        </button>
      `
})
// <div [formGroup]="parent" [ngClass] = "classes.parentClass">
// </div>
export class GxButtonComponent {
    @Input() layout: any;
    // @Input() idx: string;
    @Input() parent: FormGroup;
    classes: any = {}
    // styles;
    constructor(private brokerService: BrokerService
        , private gxService: GxService

    ) { }
    ngOnInit() {
        // this.styles = {color:"red"};
        // this.btnClass = "btn"
        //   this.classes = this.jxService.getClasses(this.layout, this.parent);
    }

    buttonClicked() {
        if (this.layout.subtype && this.layout.subtype == "reset") {
            this.parent.reset();
        } else {
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
}