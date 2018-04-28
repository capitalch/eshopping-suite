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


@NgModule({
  declarations: [
    AppComponent,
    LearnComponent
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
  ],
  providers: [
    , JxMainService
    , BrokerService
    , JxService
    // , { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
