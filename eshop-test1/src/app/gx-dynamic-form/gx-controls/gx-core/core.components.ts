import { Component, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GxService } from "../../gx.service";
import { BrokerService } from "../../../broker.service";

@Component({
    selector: 'gx-textarea'
    , styleUrls: ['./textarea.scss']
    , template: `
      <div [formGroup]="parent" [class] = "layout.id + '-box'">
        <label [for]="layout.id" [class] = "layout.id + '-label'">{{layout.label}}</label>
        <textarea [id]="layout.id" [class]="layout.id" [ngClass] = "layout.class"
            [placeholder]="layout.placeholder" [ngStyle]="layout.style"
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
        this.gxService.createGenericControl(this.layout, this.parent);
    }
}

@Component({
    selector: 'gx-button',
    template: `
    <div class = "layout.id + '-box'">      
        <button (click) = "buttonClicked()" [class] = "layout.id" [ngClass] = "layout.class"
                [ngStyle] = "layout.style"
                type="button" [id]="layout.id"> 
                {{layout.label}}
        </button>
    </div>
      `
})
export class GxButtonComponent {
    @Input() layout: any;
    // @Input() idx: string;
    @Input() parent: FormGroup;
    classes: any = {}
    constructor(private brokerService: BrokerService
        , private gxService: GxService
    ) { }
    ngOnInit() {
    }

    buttonClicked() {
        if (this.layout.subtype && this.layout.subtype == "reset") {
            this.parent.reset();
        } else {
            this.gxService.processForm(this.parent);
            if (this.layout.validateForm) {
                this.gxService.validateAllFormFields(this.parent);
                if (this.parent.valid && (!this.parent.pending)) {
                    this.brokerService.emit(this.layout.id, this.parent);
                } else {
                    console.log("Invalid form");
                }
            } else {
                this.brokerService.emit(this.layout.id, this.parent);
            }
        }
    }
}