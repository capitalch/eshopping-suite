import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JxCheckboxGroupComponent } from './jx-controls/jx-checkbox-group/jx-checkbox-group.component';
import { JxMatCheckboxComponent, JxMatInputComponent, JxMatRadioComponent, JxMatSelectComponent, JxMatTextAreaComponent, JxMatDatePickerComponent, JxMatButtonComponent } from './jx-controls/jx-mat/mat.components';
import { JxGroupComponent } from './jx-group/jx-group.component';
import { JxArrayComponent } from './jx-array/jx-array.component';
import { JxFormComponent } from './jx-form/jx-form.component';
import { JxCheckboxComponent, JxTextareaComponent, JxRadioComponent, JxSelectComponent, JxButtonComponent, JxSubmitComponent, JxAnchorComponent } from './jx-controls/jx-core/core.components';
import { JxStubComponent } from './jx-stub/jx-stub.component';
import { JxErrorComponent } from './jx-controls/jx-error/jx-error.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { JxDynamicComponent } from './jx-controls/jx-dynamic/jx-dynamic.component';
import { Custom1Component } from './jx-controls/custom1/custom1.component';
@NgModule({
  imports: [
    CommonModule
    , ReactiveFormsModule
    , AngularMaterialModule
  ],
  declarations: [
    JxFormComponent
    , JxAnchorComponent
    , JxButtonComponent
    , JxSubmitComponent
    , JxCheckboxComponent
    , JxRadioComponent
    , JxSelectComponent
    , JxTextareaComponent
    , JxArrayComponent
    , JxGroupComponent
    , JxStubComponent
    , JxErrorComponent
    , JxCheckboxGroupComponent
    , JxMatCheckboxComponent
    , JxMatRadioComponent
    , JxMatSelectComponent
    , JxMatTextAreaComponent
    , JxMatInputComponent
    , JxMatDatePickerComponent
    , JxMatButtonComponent
    , JxDynamicComponent, Custom1Component
  ]
  , exports: [JxFormComponent]
  , entryComponents: [
    JxCheckboxComponent
    , JxTextareaComponent
    , JxRadioComponent
    , JxSelectComponent
    , JxCheckboxGroupComponent
    , JxCheckboxGroupComponent
    , JxMatCheckboxComponent
    , JxMatInputComponent
    , JxMatRadioComponent
    , JxMatSelectComponent
    , JxMatTextAreaComponent
    , JxMatDatePickerComponent
    , JxMatButtonComponent
    , JxGroupComponent
    , JxArrayComponent
    , JxAnchorComponent
    , JxButtonComponent
    , JxSubmitComponent
    , Custom1Component
  ]
})
export class JxDynamicFormModule { }
