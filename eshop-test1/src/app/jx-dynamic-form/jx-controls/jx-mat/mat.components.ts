import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JxService } from '../../jx-service/jx.service';
import { Observable } from 'rxjs/Observable'; import * as moment from "moment";
import { DateAdapter } from '@angular/material';
import { BrokerService } from '../../../broker.service';

@Component({
    selector: 'jxmat-checkbox',
    template: `
    <div [formGroup]="parent" [ngClass] = "classes.parentClass">
        <mat-checkbox [ngClass] = "classes.elementClass" [id]="layout.id+idx" [formControlName]="layout.id" [value]="layout.value">{{layout.label}}</mat-checkbox>
    </div>`
})
export class JxMatCheckboxComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    classes; any = {};
    constructor(private jxService: JxService) { }
    ngOnInit() {
        this.classes = this.jxService.getClasses(this.layout, this.parent);
    }
}

@Component({
    selector: 'jxmat-radio',
    template: `
    <fieldset [formGroup] = "parent" [ngClass] = "classes.parentClass">
    <legend>{{layout.label}}</legend> 
        <mat-radio-group [formControlName] = "layout.id">
            <ng-container *ngFor="let option of layout.options">
                    <mat-radio-button [ngClass] = "classes.elementClass" [name] = "layout.id" [value] = "option.value">{{option.label}}</mat-radio-button>
            </ng-container>
        </mat-radio-group>
    </fieldset>    
    `
})
export class JxMatRadioComponent {
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
    selector: 'jxmat-select',
    template: `
    <mat-form-field [formGroup]="parent" [ngClass] = "classes.parentClass">
        <mat-select [formControlName]="layout.id" [ngClass] = "classes.elementClass">
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
    classes: any = {};
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
        this.classes = this.jxService.getClasses(this.layout, this.parent);
    }
}

@Component({
    selector: 'jxmat-textarea',
    template: `    
        <mat-form-field [formGroup]="parent" [ngClass] = "classes.parentClass">
            <textarea matInput [ngClass] = "classes.elementClass" [placeholder]="layout.placeholder" [formControlName] = "layout.id" [value]="layout.value"></textarea>           
        </mat-form-field>
        <jx-error [layout]="layout" [parent]="parent"></jx-error>
        `
})
export class JxMatTextAreaComponent {
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
    selector: 'jxmat-input',
    template: `    
        <mat-form-field [formGroup]="parent" [ngClass]="classes.parentClass">
            <input matInput [ngClass] = "classes.elementClass" [type]="layout.subType" [placeholder]="layout.placeholder" [formControlName] = "layout.id" [value]="layout.value">            
        </mat-form-field>
        <jx-error [layout]="layout" [parent]="parent"></jx-error>
        `
})
export class JxMatInputComponent {
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
    selector: 'jxmat-datepicker',
    template: `    
        <mat-form-field [formGroup]="parent" [ngClass]="classes.parentClass">
            <input (dateInput) = "change($event)" matInput [ngClass] = "classes.elementClass" [matDatepicker]="picker"  [placeholder]="layout.placeholder" [formControlName] = "layout.id" [value]="layout.value" readonly>           
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
    classes; any = {};
    constructor(
        private jxService: JxService
        , private adapter: DateAdapter<Date>
    ) { }
    ngOnInit() {
        this.classes = this.jxService.getClasses(this.layout, this.parent);
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

@Component({
    selector: 'jxmat-button',
    template: `
    <ng-container [ngSwitch]="layout.subType">
        <span *ngSwitchCase="'raised'" [ngClass] = "classes.parentClass" >
            <button (click)="buttonClicked()" mat-raised-button [ngClass] = "classes.elementClass"  [color]="layout.color">
                <span [ngClass]= "classes.labelClass">{{layout.label}}</span>
                <i *ngIf="layout.faClass" [class] = "layout.faClass"></i>
            </button>
        </span>
        <span *ngSwitchCase="'icon'" [ngClass] = "classes.parentClass" >
            <button (click)="buttonClicked()" mat-icon-button [color] = "layout.color" [ngClass] = "classes.elementClass" >               
                <span [ngClass]= "classes.labelClass">{{layout.label}}</span>
                <i *ngIf="layout.faClass" [class] = "layout.faClass"></i>                
            </button>  
        </span>
        <span *ngSwitchCase="'button'" [ngClass] = "classes.parentClass" >
            <button (click)="buttonClicked()" mat-button [color] = "layout.color" [ngClass] = "classes.elementClass" >               
                <span [ngClass]= "classes.labelClass">{{layout.label}}</span>
                <i *ngIf="layout.faClass" [class] = "layout.faClass"></i>                
            </button>  
        </span>
        <span *ngSwitchCase="'fab'" [ngClass] = "classes.parentClass" >
            <button (click)="buttonClicked()" mat-fab [color] = "layout.color" [ngClass] = "classes.elementClass" >               
                <span [ngClass]= "classes.labelClass">{{layout.label}}</span>
                <i *ngIf="layout.faClass" [class] = "layout.faClass"></i>                
            </button>  
        </span>
        <span *ngSwitchCase="'mini-fab'" [ngClass] = "classes.parentClass" >
            <button (click)="buttonClicked()" mat-mini-fab [color] = "layout.color" [ngClass] = "classes.elementClass" >               
                <span [ngClass]= "classes.labelClass">{{layout.label}}</span>
                <i *ngIf="layout.faClass" [class] = "layout.faClass"></i>                
            </button>  
        </span>
    </ng-container>
    
    `

})
export class JxMatButtonComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    classes
    constructor(private jxService: JxService, private brokerService: BrokerService
    ) { }

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



