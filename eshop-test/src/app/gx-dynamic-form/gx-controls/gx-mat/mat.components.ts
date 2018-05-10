import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { GxService } from '../../service/gx.service';
import { DateAdapter } from '@angular/material';
import * as moment from 'moment';
import { IbukiService } from '../../service/ibuki.service';

@Component({
    selector: 'app-gxmat-button'
    , styleUrls: ['./mat-button.scss']
    , template: `
    <ng-container [ngSwitch]="layout.subType">
        <span *ngSwitchCase="'raised'" [class] = "layout.id + '-box'">
            <button (click)="buttonClicked()" mat-raised-button
                [class]='layout.id' [ngClass] = 'layout.class' [ngStyle]='layout.style'
                [color]="layout.color">
                <span [class] = "layout.id + '-label'">{{layout.label}}</span>
                <i *ngIf="layout.faClass" [class] = "layout.faClass"></i>
            </button>
        </span>
        <span *ngSwitchCase="'icon'" [class] = "layout.id + '-box'">
            <button (click)="buttonClicked()" mat-icon-button
                [class]='layout.id' [ngClass] = 'layout.class' [ngStyle]='layout.style'
                [color] = "layout.color">
                <span [class] = "layout.id + '-label'">{{layout.label}}</span>
                <i *ngIf="layout.faClass" [class] = "layout.faClass"></i>
            </button>
        </span>
        <span *ngSwitchCase="'button'" [class] = "layout.id + '-box'">
            <button (click)="buttonClicked()" mat-button
                [class]='layout.id' [ngClass] = 'layout.class' [ngStyle]='layout.style'
                [color] = "layout.color">
                <span [class] = "layout.id + '-label'">{{layout.label}}</span>
                <i *ngIf="layout.faClass" [class] = "layout.faClass"></i>
            </button>
        </span>
        <span *ngSwitchCase="'fab'" [class] = "layout.id + '-box'">
            <button (click)="buttonClicked()" mat-fab
                [class]='layout.id' [ngClass] = 'layout.class' [ngStyle]='layout.style'
                [color] = "layout.color" >
                <span [class] = "layout.id + '-label'">{{layout.label}}</span>
                <i *ngIf="layout.faClass" [class] = "layout.faClass"></i>
            </button>
        </span>
        <span *ngSwitchCase="'mini-fab'" [class] = "layout.id + '-box'">
            <button (click)="buttonClicked()" mat-mini-fab
                [class]='layout.id' [ngClass] = 'layout.class' [ngStyle]='layout.style'
                [color] = "layout.color" [ngClass] = "classes.elementClass" >
                <span [class] = "layout.id + '-label'">{{layout.label}}</span>
                <i *ngIf="layout.faClass" [class] = "layout.faClass"></i>
            </button>
        </span>
    </ng-container>`

})
export class GxMatButtonComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: FormGroup;
    constructor(private gxService: GxService
        , private fb: FormBuilder
        , private ibukiService: IbukiService
    ) { }

    ngOnInit() {
        this.gxService.createGenericControl(this.layout, this.parent);
    }

    buttonClicked() {
        this.gxService.processForm(this.parent);
        if (this.layout.validateForm) {
            this.gxService.validateAllFormFields(this.parent);
            if (this.parent.valid && (!this.parent.pending)) {
                this.ibukiService.emit(this.layout.actionId, this.parent);
            } else {
                console.log('Invalid form');
            }
        } else {
            this.ibukiService.emit(this.layout.actionId, this.parent);
        }
    }
}

@Component({
    selector: 'app-gxmat-input'
    , styleUrls: ['./mat-input.scss']
    , template: `
        <mat-form-field [formGroup]='parent' [class] = "layout.id + '-box'">
            <input matInput [class]='layout.id' [ngClass] = 'layout.class'
            [placeholder]='layout.placeholder' [ngStyle]='layout.style'
            [formControlName]='layout.id' [value]="layout.value">
        </mat-form-field>
        <app-gx-error [layout]="layout" [parent]="parent"></app-gx-error>
        `
})
export class GxMatInputComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: FormGroup;
    constructor(private gxService: GxService
        ,
        private fb: FormBuilder) { }
    ngOnInit() {
        this.gxService.createGenericControl(this.layout, this.parent);
    }
}

@Component({
    selector: 'app-gxmat-textarea'
    , styleUrls: ['./mat-textarea.scss']
    , template: `
        <mat-form-field [formGroup]='parent' [class] = "layout.id + '-box'">
            <textarea matInput [class]='layout.id' [ngClass] = 'layout.class'
                    [placeholder]='layout.placeholder' [ngStyle]='layout.style'
                    [formControlName]='layout.id'>{{layout.value}}
            </textarea>
        </mat-form-field>
        <app-gx-error [layout]="layout" [parent]="parent"></app-gx-error>
        `
})

export class GxMatTextareaComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: FormGroup;
    classes: any = {};
    constructor(
        private gxService: GxService
        ,
        private fb: FormBuilder) { }
    ngOnInit() {
        this.gxService.createGenericControl(this.layout, this.parent);
    }
}

@Component({
    selector: 'app-gxmat-datepicker'
    , styleUrls: ['./mat-datepicker.scss']
    , template: `
        <mat-form-field [formGroup]='parent' [class] = "layout.id + '-box'">
            <input (dateInput) = "change($event)" matInput
                [class]='layout.id' [ngClass] = 'layout.class' [ngStyle]='layout.style' [matDatepicker]="picker"
                [placeholder]="layout.placeholder" [formControlName] = "layout.id"
                [value]="layout.value" readonly>
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
        <app-gx-error [layout]="layout" [parent]="parent"></app-gx-error>
        `

})
export class GxMatDatePickerComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: FormGroup;
    classes; any = {};
    constructor(
        private gxService: GxService
        ,
        private fb: FormBuilder
        , private adapter: DateAdapter<Date>
    ) { }
    ngOnInit() {
        this.gxService.createGenericControl(this.layout, this.parent);
        this.adapter.setLocale(this.layout.locale || 'en-US');
    }

    change(event: any) {
        const val2 = moment(event.value).format('YYYY-MM-DD');
        const group = <FormGroup>this.parent;
        const ctrl = <FormControl>group.controls[this.layout.id];
        const val = moment.utc(val2);
        ctrl.setValue(val);
    }
}

@Component({
    selector: 'app-gxmat-radio'
    , styleUrls: ['./mat-radio.scss']
    , template: `
    <fieldset [formGroup]='parent' [class] = "layout.id + '-box'">
        <legend [class] = "layout.id + '-label'">{{layout.label}}</legend>
            <mat-radio-group [formControlName]='layout.id'>
                <ng-container *ngFor="let option of options">
                    <mat-radio-button [class]='layout.id' [ngClass] = 'layout.class'
                        [ngStyle]='layout.style' [name] = "layout.id" [value] = "option.value">
                            {{option.name}}
                    </mat-radio-button>
                </ng-container>
            </mat-radio-group>
        <app-gx-error [layout]='layout' [parent]='parent'></app-gx-error>
    </fieldset>`
})

export class GxMatRadioComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: FormGroup;
    options: any;
    constructor(
        private gxService: GxService
        ,
        private fb: FormBuilder
    ) { }
    ngOnInit() {
        const ret = this.gxService.getOptions(this.layout);
        if (ret instanceof Observable) {
            const sub = ret.subscribe(d => {
                this.options = d;
                const a = sub && sub.unsubscribe();
            });
        } else {
            this.options = ret;
        }
        this.gxService.createGenericControl(this.layout, this.parent);
    }
}

@Component({
    selector: 'app-gxmat-select'
    , styleUrls: ['./mat-select.scss']
    , template: `
    <mat-form-field [formGroup]="parent" [class] = "layout.id + '-box'">
        <label [class] = "layout.id + '-label'">{{layout.label}}</label>
        <mat-select [formControlName]="layout.id" [class]='layout.id'
            [ngClass] = 'layout.class' [ngStyle]='layout.style'>
            <mat-option *ngFor="let option of options" [value]="option.value" >
                {{option.name}}
            </mat-option>
        </mat-select>
        <app-gx-error [layout]="layout" [parent]="parent"></app-gx-error>
    </mat-form-field>
    `
})

export class GxMatSelectComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: FormGroup;
    options: any;
    constructor(private gxService: GxService, private ref: ChangeDetectorRef) { }
    ngOnInit() {
        const ret = this.gxService.getOptions(this.layout);
        if (ret instanceof Observable) {
            const sub = ret.subscribe(d => {
                this.options = d;
                const a = sub && sub.unsubscribe();
            });
        } else {
            this.options = ret;
        }
        this.gxService.createGenericControl(this.layout, this.parent);
    }
}

@Component({
    selector: 'app-gxmat-checkbox'
    , styleUrls: ['./mat-checkbox.scss']
    , template: `
    <div [formGroup]='parent' [class] = "layout.id + '-box'">
        <label [class] = "layout.id + '-label'">
            <mat-checkbox [class]='layout.id' [ngClass] = 'layout.class'
                    [ngStyle]='layout.style' [formControlName]='layout.id'
                    [value] = 'layout.value'>
            </mat-checkbox>{{layout.label}}
        </label>
        <app-gx-error [layout]='layout' [parent]='parent'></app-gx-error>
    </div>`
})

export class GxMatCheckboxComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: FormGroup;
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
    selector: 'app-gxmat-checkboxgroup'
    , styleUrls: ['./mat-checkboxgroup.scss']
    , template: `
    <fieldset  [formGroup]="parent" [class] = "layout.id + '-box'">
    <legend [class] = "layout.id + '-label'">{{layout.label}}</legend>
        <ng-container [formGroupName]="layout.id">
            <ng-container *ngFor="let option of options">
                <label [class] = "layout.id + '-option'"
                        style="display:inline-block">
                    <mat-checkbox [class]='layout.id' [ngClass] = 'layout.class'
                        [ngStyle]='layout.style' [formControlName]="option.id">
                    </mat-checkbox>
                    {{option.name}}
                </label>
            </ng-container>
        </ng-container>
        <app-gx-error [layout]='layout' [parent]='parent'></app-gx-error>
    </fieldset>
      `
})

export class GxMatCheckboxGroupComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: FormGroup;
    options: any;
    constructor(
        private gxService: GxService
        , private fb: FormBuilder
    ) { }
    ngOnInit() {
        const ret = this.gxService.getOptions(this.layout);
        if (ret instanceof Observable) {
            const childControls = {};
            const group: FormGroup = this.fb.group(childControls);
            group.setValidators(this.gxService.checkboxGroupRequiredValidator);
            this.parent.setControl(this.layout.id, group);
            const sub = ret.subscribe(d => {
                this.options = d;
                d.forEach(e => {
                    group.setControl(e.id, this.fb.control(e.value));
                });
                sub.unsubscribe();
            });
        } else {
            this.options = ret;
            this.gxService.createCheckboxGroup({
                parent: this.parent
                , layout: this.layout
                , options: ret
            });
        }
    }
}




