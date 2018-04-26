import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JxCheckboxGroupComponent } from './jx-controls/jx-checkbox-group/jx-checkbox-group.component';
import { JxMatCheckboxComponent, JxMatInputComponent, JxMatRadioComponent, JxMatSelectComponent, JxMatTextAreaComponent, JxMatDatePickerComponent } from './jx-controls/mat.components';
import { JxGroupComponent } from './jx-group/jx-group.component';
import { JxArrayComponent } from './jx-array/jx-array.component';
import { JxFormComponent } from './jx-form/jx-form.component';
import { JxCheckboxComponent, JxTextareaComponent, JxRadioComponent, JxSelectComponent, JxButtonComponent, JxSubmitComponent, JxDynamicComponent } from './jx-controls/core.components';
import { JxStubComponent } from './jx-stub/jx-stub.component';
import { JxErrorComponent } from './jx-controls/jx-error/jx-error.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
@NgModule({
  imports: [
    CommonModule
    , ReactiveFormsModule
    , AngularMaterialModule
  ],
  declarations: [
    JxFormComponent
    , JxArrayComponent
    , JxGroupComponent
    , JxStubComponent
    , JxErrorComponent
    , JxCheckboxComponent
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
    , JxGroupComponent
    , JxArrayComponent
    , JxButtonComponent
    , JxSubmitComponent
    , JxDynamicComponent
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
    , JxGroupComponent
    , JxArrayComponent
    , JxButtonComponent
    , JxSubmitComponent]
})
export class JxDynamicFormModule { }
