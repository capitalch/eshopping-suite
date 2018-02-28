import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { Formio1Component } from './formio1/formio1.component';
import { FormioModule } from 'angular-formio';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import {FormioGridModule} from 'angular-formio';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    Formio1Component,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,  FormioModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
