import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MAT_DATE_LOCALE } from '@angular/material';
import { LearnComponent } from './learning/learn/learn.component';

import { GxDynamicFormModule } from './gx-dynamic-form/gx-dynamic-form.module';
import { GxCustomService } from './service/gx-custom.service';
import { InputComponent } from './custom-controls/input/input.component';
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
    , GxDynamicFormModule
  ],
  providers: [
    GxCustomService
  ]
  , entryComponents: [
    InputComponent
  ]
  , bootstrap: [AppComponent]
})
export class AppModule { }
