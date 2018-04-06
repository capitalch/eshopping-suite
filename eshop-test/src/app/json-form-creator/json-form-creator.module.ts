import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JxFormService } from './jx-form.service';
import { HttpClientModule } from '@angular/common/http';
import { JxFormComponent } from './jx-form/jx-form.component';
import { JxArrayComponent } from './jx-array/jx-array.component';
import { JxGroupComponent } from './jx-group/jx-group.component';
import { JxCheckboxGroupComponent } from './jx-checkbox-group/jx-checkbox-group.component';
import { JxErrorComponent } from './jx-error/jx-error.component';
import {
  JxTextareaComponent
  , JxCheckboxComponent
  , JxRadioComponent
  , JxSelectComponent
  , JxDefaultComponent
} from './jx-controls/core.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    JxFormComponent, 
    JxArrayComponent, 
    JxGroupComponent, 
    JxCheckboxGroupComponent, 
    JxErrorComponent,
    JxTextareaComponent,
    JxCheckboxComponent,
    JxRadioComponent,
    JxSelectComponent,
    JxDefaultComponent
  ],
  providers: [JxFormService],
  exports:[JxFormComponent]
})
export class JsonFormCreatorModule { }
