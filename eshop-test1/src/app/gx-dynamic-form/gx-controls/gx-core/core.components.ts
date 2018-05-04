import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../service/gx.service';
// import { BrokerService } from '../../../broker.service';
import { Observable } from 'rxjs/Observable';
import { IbukiService } from '../../service/ibuki.service';

@Component({
    selector: 'app-gx-select'
    , styleUrls: ['./select.scss']
    , template: `
    <div [formGroup]='parent' [class] = "layout.id + '-box'">
        <label [class] = "layout.id + '-label'">{{layout.label}}</label>
        <select [class]='layout.id' [ngClass] = 'layout.class'
            [ngStyle]='layout.style' [formControlName]='layout.id'>
            <option *ngFor="let option of options" [value]="option.value" >{{option.name}}
            </option>
        </select>
        <app-gx-error [layout]='layout' [parent]='parent'></app-gx-error>
    </div>`
})

export class GxSelectComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: FormGroup;
    classes: any = {};
    options: any;
    constructor(
        private gxService: GxService
        ,
        private fb: FormBuilder
    ) { }
    ngOnInit() {
        console.log('gx-select');
        // logic for options being an array, a function or an observable
        if (typeof (this.layout.options) === 'string') {
            const options = this.gxService.getSelectOptions(this.layout.options);
            if (options instanceof Observable) {
                options.subscribe(x => {
                    this.options = x;
                    // this.ref.markForCheck(); //forceful change detector
                });
            } else if (typeof (options) === 'function') {
                this.options = options();
            } else {
                this.options = options;
            }
        } else {
            this.options = this.layout.options;
        }

        this.gxService.createGenericControl(this.layout, this.parent);
    }
}

@Component({
    selector: 'app-gx-radio'
    , styleUrls: ['./radio.scss']
    , template: `
    <fieldset [formGroup]='parent' [class] = "layout.id + '-box'">
        <legend [class] = "layout.id + '-label'">{{layout.label}}</legend>
        <div *ngFor="let option of layout.options">
        <input type = 'radio' [id]='option.id' [class]='layout.id' [ngClass] = 'layout.class'
                    [ngStyle]='layout.style' [formControlName]='layout.id'
                    [value] = 'option.value' [name] = 'layout.id'>
        <label [class] = "layout.id + '-label'" [for] = "option.id">{{option.label}}</label>
        </div>
        <app-gx-error [layout]='layout' [parent]='parent'></app-gx-error>
    </fieldset>`
})

export class GxRadioComponent implements OnInit {
    @Input() layout: any;
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
    selector: 'app-gx-checkbox'
    , styleUrls: ['./checkbox.scss']
    , template: `
    <div [formGroup]='parent' [class] = "layout.id + '-box'">
        <label [class] = "layout.id + '-label'">
            <input type = 'checkbox' [id]='layout.id' [class]='layout.id' [ngClass] = 'layout.class'
                    [ngStyle]='layout.style' [formControlName]='layout.id'
                    [value] = 'layout.value'>{{layout.label}}
        </label>
        <app-gx-error [layout]='layout' [parent]='parent'></app-gx-error>
    </div>`
})

export class GxCheckboxComponent implements OnInit {
    @Input() layout: any;
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
    selector: 'app-gx-input'
    , styleUrls: ['./input.scss']
    , template: `
      <div [formGroup]='parent' [class] = "layout.id + '-box'">
      <label [for]='layout.id' [class] = "layout.id + '-label'">{{layout.label}}</label>
        <input [type] = 'layout.subtype' [id]='layout.id' [class]='layout.id' [ngClass] = 'layout.class'
            [placeholder]='layout.placeholder' [ngStyle]='layout.style'
            [formControlName]='layout.id' [value] = 'layout.value'>
        <app-gx-error [layout]='layout' [parent]='parent'></app-gx-error>
      </div>`
})
//
export class GxInputComponent implements OnInit {
    @Input() layout: any;
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
    selector: 'app-gx-anchor'
    // , styleUrls: ['./textarea.scss']
    , template: `
      <div [formGroup]='parent' [class] = "layout.id + '-box'">
        <a [href] = "layout.href" [class] ="layout.id" [ngClass] = "layout.class" [ngStyle] = "layout.style">{{layout.label}}</a>
      </div>`
})

export class GxAnchorComponent implements OnInit {
    @Input() layout: any;
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
    selector: 'app-gx-textarea'
    , styleUrls: ['./textarea.scss']
    , template: `
      <div [formGroup]='parent' [class] = "layout.id + '-box'">
      <label [for]='layout.id' [class] = "layout.id + '-label'">{{layout.label}}</label>
        <textarea [id]='layout.id' [class]='layout.id' [ngClass] = 'layout.class'
            [placeholder]='layout.placeholder' [ngStyle]='layout.style'
            [formControlName]='layout.id'>{{layout.value}}
        </textarea>
        <app-gx-error [layout]='layout' [parent]='parent'></app-gx-error>
      </div>`
})
//
export class GxTextareaComponent implements OnInit {
    @Input() layout: any;
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
    selector: 'app-gx-button',
    template: `
    <div [class] = "layout.id + '-box'">
        <button (click) = 'buttonClicked()' [class] = 'layout.id' [ngClass] = 'layout.class'
                [ngStyle] = 'layout.style'
                type='button' [id]='layout.id'>
                {{layout.label}}
        </button>
    </div>
      `
})
export class GxButtonComponent implements OnInit {
    @Input() layout: any;
    @Input() parent: FormGroup;
    classes: any = {};
    constructor(private ibukiService: IbukiService
        , private gxService: GxService
    ) { }
    ngOnInit() {
    }

    buttonClicked() {
        if (this.layout.subtype && this.layout.subtype === 'reset') {
            this.parent.reset();
        } else {
            this.gxService.processForm(this.parent);
            if (this.layout.validateForm) {
                this.gxService.validateAllFormFields(this.parent);
                if (this.parent.valid && (!this.parent.pending)) {
                    this.ibukiService.emit(this.layout.id, this.parent);
                } else {
                    console.log('Invalid form');
                }
            } else {
                this.ibukiService.emit(this.layout.id, this.parent);
            }
        }
    }
}
