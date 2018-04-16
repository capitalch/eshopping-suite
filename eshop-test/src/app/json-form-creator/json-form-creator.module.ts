import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JxService } from './jx-service/jx.service';
import { BrokerService } from './broker.service';
import { HttpClientModule } from '@angular/common/http';
import { JxFormComponent } from './jx-form/jx-form.component';
import { JxArrayComponent } from './jx-array/jx-array.component';
import { JxGroupComponent } from './jx-group/jx-group.component';
import { JxCheckboxGroupComponent } from './jx-controls/jx-checkbox-group/jx-checkbox-group.component';
import { JxErrorComponent } from './jx-controls/jx-error/jx-error.component';
import {
  JxTextareaComponent
  , JxCheckboxComponent
  , JxRadioComponent
  , JxSelectComponent
  , JxDefaultComponent
} from './jx-controls/core.components';
import {
  JxMatCheckboxComponent
  , JxMatInputComponent
  , JxMatRadioComponent
  , JxMatSelectComponent
  , JxMatTextAreaComponent
  , JxMatDatePickerComponent
} from './jx-controls/mat.components';
import { JxStubComponent } from './jx-stub/jx-stub.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
// import { MatIconModule } from '@angular/material/icon';
// import { 
//   MatButtonModule
//   , MatCheckboxModule
//   , MatInputModule
//   , MatRadioModule
//   , MatSelectModule
//   , MatDatepickerModule
//   , MatNativeDateModule
// } from '@angular/material';
// import { MAT_DATE_LOCALE } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    ,AngularMaterialModule
    // , MatButtonModule
    // , MatCheckboxModule
    // , MatInputModule
    // , MatRadioModule
    // , MatSelectModule
    // , MatDatepickerModule
    // , MatNativeDateModule
    // , MatIconModule
  ],
  declarations: [
    JxFormComponent
    , JxGroupComponent
    , JxArrayComponent
    , JxErrorComponent
    , JxCheckboxGroupComponent
    , JxTextareaComponent
    , JxCheckboxComponent
    , JxRadioComponent
    , JxSelectComponent
    , JxDefaultComponent
    , JxMatCheckboxComponent
    , JxMatInputComponent
    , JxMatRadioComponent
    , JxMatSelectComponent
    , JxMatTextAreaComponent
    , JxMatDatePickerComponent
    , JxStubComponent
  ],
  providers: [JxService, BrokerService],  //, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  exports:[JxFormComponent]
})
export class JsonFormCreatorModule { }
