import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GxFormComponent } from './gx-form/gx-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { GxDynamicDirective } from './gx-controls/gx-dynamic/gx-dynamic.directive';
import { GxTextareaComponent, GxButtonComponent } from './gx-controls/gx-core/core.components';
import { GxService } from './gx.service';
import { GxErrorComponent } from './gx-controls/gx-error/gx-error.component';



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
    , GxErrorComponent]
  , entryComponents: [
    GxTextareaComponent
    , GxButtonComponent
    , GxErrorComponent
  ]
  , providers: [GxService]
})
export class GxDynamicFormModule { }
