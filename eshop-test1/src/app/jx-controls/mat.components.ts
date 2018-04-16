import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';
import { Observable } from 'rxjs/Observable';
// import { MatDatepickerInputEvent } from '@angular/material';
// import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
// import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
import * as moment from "moment";
import { DateAdapter } from '@angular/material';
// import { MyMomentDateAdapter, MyDateAdapter } from './myMomentDateAdapter';
// import { MyMomentDateAdapter } from './myMomentDateAdapter';


@Component({
    selector: 'jxmat-checkbox',
    template: `
    <div [formGroup]="parent" [ngClass] = "parentClass">
        <mat-checkbox [ngClass] = "elementClass" [id]="layout.id+idx" [formControlName]="layout.id" [value]="layout.value">{{layout.label}}</mat-checkbox>
    </div>`
})
export class JxMatCheckboxComponent {
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
    selector: 'jxmat-radio',
    template: `
    <fieldset [formGroup] = "parent" [ngClass] = "parentClass">
    <legend>{{layout.label}}</legend> 
        <mat-radio-group [formControlName] = "layout.id">
            <ng-container *ngFor="let option of layout.options">
                    <mat-radio-button [ngClass] = "elementClass" [name] = "layout.id" [value] = "option.value">{{option.label}}</mat-radio-button>
            </ng-container>
        </mat-radio-group>
    </fieldset>    
    `
})
export class JxMatRadioComponent {
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
    selector: 'jxmat-select',
    template: `
    <mat-form-field [formGroup]="parent" [ngClass] = "parentClass">
        <mat-select [formControlName]="layout.id" [ngClass] = "elementClass">
            <mat-option *ngFor="let option of options" [value]="option.value" >
                {{option.name}}
            </mat-option>
        </mat-select>
    </mat-form-field>
    <jx-error [layout]="layout" [parent]="parent"></jx-error> 
    `
})
export class JxMatSelectComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    elementClass: string = "";
    parentClass: string = "";
    labelClass: string = "";
    options: any;
    constructor(private jxService: JxService, private ref: ChangeDetectorRef) { }
    ngOnInit() {
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
    selector: 'jxmat-textarea',
    template: `    
        <mat-form-field [formGroup]="parent" [ngClass] = "parentClass">
            <textarea matInput [ngClass] = "elementClass" [placeholder]="layout.placeholder" [formControlName] = "layout.id" [value]="layout.value"></textarea>           
        </mat-form-field>
        <jx-error [layout]="layout" [parent]="parent"></jx-error>
        `
})
export class JxMatTextAreaComponent {
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
    selector: 'jxmat-input',
    template: `    
        <mat-form-field [formGroup]="parent" [ngClass]="parentClass">
            <input matInput [ngClass] = "elementClass" [type]="layout.subType" [placeholder]="layout.placeholder" [formControlName] = "layout.id" [value]="layout.value">            
        </mat-form-field>
        <jx-error [layout]="layout" [parent]="parent"></jx-error>
        `
})
export class JxMatInputComponent {
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
    selector: 'jxmat-datepicker',
    template: `    
        <mat-form-field [formGroup]="parent" [ngClass]="parentClass">
            <input (dateInput) = "change($event)" matInput [ngClass] = "elementClass" [matDatepicker]="picker"  [placeholder]="layout.placeholder" [formControlName] = "layout.id" [value]="layout.value" readonly>           
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker ></mat-datepicker>
        </mat-form-field>
        <jx-error [layout]="layout" [parent]="parent"></jx-error>
        `

})
export class JxMatDatePickerComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    elementClass: string = "";
    parentClass: string = "";
    labelClass: string = "";
    constructor(
        private adapter: DateAdapter<Date>
    ) { }
    ngOnInit() {
        this.layout.class && (
            (typeof (this.layout.class) == "object")
            && (this.elementClass = this.layout.class.element || ''
                , this.labelClass = this.layout.class.label || ''
                , this.parentClass = this.layout.class.parent || ''
            ) || (this.parentClass = this.layout.class)
        );
        this.adapter.setLocale(this.layout.locale || "en-US");
    }

    change(event: any) {
        let val2 = moment(event.value).format("YYYY-MM-DD");
        let group = <FormGroup>this.parent;
        let ctrl = <FormControl>group.controls[this.layout.id];
        const val = moment.utc(val2);
        ctrl.setValue(val);
    }
}

// <mat-form-field [formGroup]="parent" [ngClass]="parentClass">
//             <input (dateInput) = "change($event)" matInput [ngClass] = "elementClass" [matDatepicker]="picker"  [placeholder]="layout.placeholder" [formControlName] = "layout.id" [value]="layout.value" readonly>           
//             <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
//             <mat-datepicker #picker ></mat-datepicker>
//         </mat-form-field>
//         <jx-error [layout]="layout" [parent]="parent"></jx-error>

@Component({
    selector: 'jxmat-button',
    template: `    
    <button  *ngIf="layout.subType=='raised'" [ngClass] = "elementClass" mat-raised-button [color]="layout.color">{{layout.label}}</button>
    <button  *ngIf="layout.subType=='icon'" [ngClass] = "elementClass" mat-icon-button [color]="layout.color">{{layout.icon}}</button>        
    `

})
export class JxMatButtonComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    elementClass: string = "";
    parentClass: string = "";
    labelClass: string = "";
    constructor(
    ) { }

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



