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
