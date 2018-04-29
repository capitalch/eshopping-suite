import { Component, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'textarea2',
    template: `
      <div [formGroup]="parent">        
        <textarea   [formControlName]="'t1'"></textarea>        
      </div>`
})

export class Jx2TextareaComponent {
    // @Input() layout: any;
    // @Input() idx: string;
    @Input() parent: FormGroup;
    classes: any = {};
    constructor(private fb:FormBuilder) { }
    ngOnInit() {
        this.parent.setControl("t1", this.fb.control("aaa"));
    }
}