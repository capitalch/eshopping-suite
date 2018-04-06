import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// <label>
//         <input type="checkbox" [id]="layout.id+idx" [formControlName]="layout.id" [value]="layout.value"> {{layout.label}}
//       </label>
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