import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'jxmat-checkbox',
    template: `
    <ng-container [formGroup]="parent">
        <mat-checkbox [id]="layout.id+idx" [formControlName]="layout.id" [value]="layout.value">{{layout.label}}</mat-checkbox>
    </ng-container>`
})
export class JxMatCheckboxComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    constructor() { }
    ngOnInit() { }
}

@Component({
    selector: 'jxmat-input',
    template: `    
        <mat-form-field [formGroup]="parent">
            <input matInput  [type]="layout.subType" [placeholder]="layout.placeholder" [formControlName] = "layout.id" [value]="layout.value">            
        </mat-form-field>
        <jx-error [layout]="layout" [parent]="parent"></jx-error>
        `
})
export class JxMatInputComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    constructor() { }
    ngOnInit() {
    }
}

@Component({
    selector: 'jxmat-radio',
    template: `
    <fieldset [formGroup] = "parent">
    <legend>{{layout.label}}</legend> 
        <mat-radio-group [formControlName] = "layout.id">
            <ng-container *ngFor="let option of layout.options">
                    <mat-radio-button [name] = "layout.id" [value] = "option.value">{{option.label}}</mat-radio-button>
            </ng-container>
        </mat-radio-group>
    </fieldset>    
    `
})

export class JxMatRadioComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    constructor() { }
    ngOnInit() {
    }
}

// <mat-form-field>
//   <mat-select placeholder="Favorite food">
//     <mat-option *ngFor="let food of foods" [value]="food.value">
//       {{ food.viewValue }}
//     </mat-option>
//   </mat-select>
// </mat-form-field>

@Component({
    selector: 'jxmat-select',
    template: `
    <fieldset [formGroup] = "parent">
    <legend>{{layout.label}}</legend> 
        <mat-radio-group [formControlName] = "layout.id">
            <ng-container *ngFor="let option of layout.options">
                    <mat-radio-button [name] = "layout.id" [value] = "option.value">{{option.label}}</mat-radio-button>
            </ng-container>
        </mat-radio-group>
    </fieldset>    
    `
})

export class JxMatSelectComponent {
    @Input() layout: any;
    @Input() idx: string;
    @Input() parent: FormGroup;
    constructor() { }
    ngOnInit() {
    }
}