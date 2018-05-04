import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GxFormComponent } from './gx-form/gx-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { GxDynamicDirective } from './gx-controls/gx-dynamic/gx-dynamic.directive';
import { GxTextareaComponent, GxButtonComponent, GxAnchorComponent, GxInputComponent } from './gx-controls/gx-core/core.components';
import { GxCheckboxComponent, GxRadioComponent, GxSelectComponent } from './gx-controls/gx-core/core.components';
import { GxService } from './service/gx.service';
import { GxErrorComponent } from './gx-controls/gx-error/gx-error.component';
import { GxGroupComponent } from './gx-group/gx-group.component';
import { GxArrayComponent } from './gx-array/gx-array.component';
import { GxButtonGroupComponent } from './gx-controls/gx-button-group/gx-button-group.component';
import { GxMapperService } from './service/gx-mapper.service';
import { IbukiService } from './service/ibuki.service';



@NgModule({
  imports: [
    CommonModule
    , ReactiveFormsModule
    , AngularMaterialModule
  ],
  exports: [GxFormComponent]
  , declarations: [
    GxFormComponent
    , GxDynamicDirective
    , GxTextareaComponent
    , GxButtonComponent
    , GxErrorComponent
    , GxGroupComponent
    , GxArrayComponent
    , GxButtonGroupComponent
    , GxAnchorComponent
    , GxInputComponent
    , GxCheckboxComponent
    , GxRadioComponent
    , GxSelectComponent
  ]
  , entryComponents: [
    GxTextareaComponent
    , GxButtonComponent
    , GxErrorComponent
    , GxGroupComponent
    , GxArrayComponent
    , GxButtonGroupComponent
    , GxInputComponent
    , GxAnchorComponent
    , GxCheckboxComponent
    , GxRadioComponent
    , GxSelectComponent
  ]
  , providers: [GxService, GxMapperService, IbukiService]
})
export class GxDynamicFormModule { }