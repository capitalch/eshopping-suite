import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MAT_DATE_LOCALE } from '@angular/material'
import { BrokerService } from './broker.service';
import { JxMainService } from './jx-main.service';
// import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { JxDynamicFormModule } from './jx-dynamic-form/jx-dynamic-form.module';
import { JxService } from './jx-dynamic-form/jx-service/jx.service';
import { LearnComponent } from './learning/learn/learn.component';
import { Dynamic2FormModule } from './dynamic2-form/dynamic2-form.module';
import { GxDynamicFormModule } from './gx-dynamic-form/gx-dynamic-form.module';
import { GxCustomService } from './gx-custom.service';
import { InputComponent } from './input/input.component';
// import { GxTextareaComponent } from './gx-dynamic-form/gx-controls/gx-core/core.components';


@NgModule({
  declarations: [
    AppComponent,
    LearnComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , ReactiveFormsModule
    , HttpClientModule
    , AngularMaterialModule
    , BrowserAnimationsModule
    // , DynamicFormModule
    , JxDynamicFormModule
    , Dynamic2FormModule
    , GxDynamicFormModule
  ],
  providers: [
    , JxMainService
    , BrokerService
    , JxService
    , GxCustomService
    // , { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
  , entryComponents:[
    InputComponent
  ]
  , bootstrap: [AppComponent]
})
export class AppModule { }
