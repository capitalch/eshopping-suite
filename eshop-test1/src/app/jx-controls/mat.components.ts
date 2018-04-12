import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';
import { Observable } from 'rxjs/Observable';


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

// <div [formGroup]="parent" [ngClass] = "parentClass">
// <label [ngClass] = "labelClass">{{layout.label}}</label>
// <select [ngClass] = "elementClass" [formControlName]="layout.id">
//   <option *ngFor="let option of options" [value]="option.value" >{{option.name}}
//   </option>
// </select>
// <jx-error [layout]="layout" [parent]="parent"></jx-error>
// </div>

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
    <mat-form-field [formGroup]="parent">
        <mat-select [formControlName]="layout.id" >
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
    }
}