import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { Formio1Component } from './formio1/formio1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormioModule } from 'angular-formio';
import {
  JsonSchemaFormModule, MaterialDesignFrameworkModule
} from 'angular2-json-schema-form';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonSchemaComponent } from './json-schema/json-schema.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    Formio1Component,
    ReactiveFormComponent,
    DynamicFormComponent,
    JsonSchemaComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    // , FormioModule
    ReactiveFormsModule, FormsModule,
    FlexLayoutModule,
    MaterialDesignFrameworkModule,
    JsonSchemaFormModule.forRoot(MaterialDesignFrameworkModule)
    // , FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
