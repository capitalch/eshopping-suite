import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import { DynamicMaterialFormComponent } from './dynamic-material-form/dynamic-material-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicMaterialFormComponent
  ],
  imports: [
    BrowserModule
    , ReactiveFormsModule
    , BrowserAnimationsModule
    , DynamicFormsCoreModule.forRoot()
    , DynamicFormsMaterialUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
