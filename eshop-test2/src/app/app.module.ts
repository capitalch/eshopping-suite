import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { Formio1Component } from './formio1/formio1.component';
import { FormioModule } from 'angular-formio';
// import {FormioGridModule} from 'angular-formio';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    Formio1Component
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, FormioModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
