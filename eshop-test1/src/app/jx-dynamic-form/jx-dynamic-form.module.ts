import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JxCheckboxGroupComponent } from './jx-controls/jx-checkbox-group/jx-checkbox-group.component';
<<<<<<< HEAD
import { JxMatCheckboxComponent, JxMatInputComponent, JxMatRadioComponent, JxMatSelectComponent, JxMatTextAreaComponent, JxMatDatePickerComponent, JxMatButtonComponent } from './jx-controls/jx-mat/mat.components';
=======
import { JxMatCheckboxComponent, JxMatInputComponent, JxMatRadioComponent, JxMatSelectComponent, JxMatTextAreaComponent, JxMatDatePickerComponent } from './jx-controls/jx-mat/mat.components';
>>>>>>> ce646430742034b416e88ee5fc4c21b0003aa4ec
import { JxGroupComponent } from './jx-group/jx-group.component';
import { JxArrayComponent } from './jx-array/jx-array.component';
import { JxFormComponent } from './jx-form/jx-form.component';
import { JxCheckboxComponent, JxTextareaComponent, JxRadioComponent, JxSelectComponent, JxButtonComponent, JxSubmitComponent } from './jx-controls/jx-core/core.components';
import { JxStubComponent } from './jx-stub/jx-stub.component';
import { JxErrorComponent } from './jx-controls/jx-error/jx-error.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { JxDynamicComponent } from './jx-controls/jx-dynamic/jx-dynamic.component';
<<<<<<< HEAD
import { Custom1Component } from './jx-controls/custom1/custom1.component';
=======
>>>>>>> ce646430742034b416e88ee5fc4c21b0003aa4ec
@NgModule({
  imports: [
    CommonModule
    , ReactiveFormsModule
    , AngularMaterialModule
  ],
  declarations: [
    JxFormComponent
<<<<<<< HEAD
    , JxButtonComponent
    , JxSubmitComponent
    , JxCheckboxComponent
    , JxRadioComponent
    , JxSelectComponent
    , JxTextareaComponent
=======
>>>>>>> ce646430742034b416e88ee5fc4c21b0003aa4ec
    , JxArrayComponent
    , JxGroupComponent
    , JxStubComponent
    , JxErrorComponent
<<<<<<< HEAD
    , JxCheckboxGroupComponent
    , JxMatCheckboxComponent
    , JxMatRadioComponent
    , JxMatSelectComponent
    , JxMatTextAreaComponent
    , JxMatInputComponent
    , JxMatDatePickerComponent
    , JxMatButtonComponent
    
    , JxDynamicComponent, Custom1Component
=======
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
>>>>>>> ce646430742034b416e88ee5fc4c21b0003aa4ec
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
<<<<<<< HEAD
    , JxMatButtonComponent
    , JxGroupComponent
    , JxArrayComponent
    , JxButtonComponent
    , JxSubmitComponent
    , Custom1Component
  ]
=======
    , JxGroupComponent
    , JxArrayComponent
    , JxButtonComponent
    , JxSubmitComponent]
>>>>>>> ce646430742034b416e88ee5fc4c21b0003aa4ec
})
export class JxDynamicFormModule { }
