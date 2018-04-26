import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JxService } from './jx-service/jx.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JxFormComponent } from './jx-form/jx-form.component';
import { JxGroupComponent } from './jx-group/jx-group.component';
import { JxArrayComponent } from './jx-array/jx-array.component';
import { JxErrorComponent } from './jx-controls/jx-error/jx-error.component';
import { JxCheckboxGroupComponent } from './jx-controls/jx-checkbox-group/jx-checkbox-group.component';
import {
  JxTextareaComponent
  , JxCheckboxComponent
  , JxRadioComponent
  , JxSelectComponent
  , JxDefaultComponent,
  JxDynamicComponent
} from './jx-controls/core.components';
// import {MatRadioModule} from '@angular/material/radio';
import {
  JxMatCheckboxComponent
  , JxMatInputComponent
  , JxMatRadioComponent
  , JxMatSelectComponent
  , JxMatTextAreaComponent
  , JxMatDatePickerComponent,
  JxMatButtonComponent
} from './jx-controls/mat.components';
import { MAT_DATE_LOCALE } from '@angular/material'
import { BrokerService } from './broker.service';
// import { JxChildrenComponent } from './jx-children/jx-children.component';
import { JxStubComponent } from './jx-stub/jx-stub.component';
import { LearnComponent } from './learn/learn.component';
import { JxMainService } from './jx-main.service';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [
    AppComponent
    , JxFormComponent
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
    , JxMatButtonComponent
    // , JxChildrenComponent
    , JxStubComponent
    , LearnComponent
    , JxDynamicComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , ReactiveFormsModule
    , HttpClientModule
    , AngularMaterialModule
    , BrowserAnimationsModule
    , DynamicFormModule
  ],
  providers: [
    , JxMainService
    , BrokerService

    , JxService
    // , { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
  , entryComponents: [
    JxCheckboxComponent
    , JxTextareaComponent
    , JxRadioComponent
    , JxSelectComponent
    , JxCheckboxGroupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
