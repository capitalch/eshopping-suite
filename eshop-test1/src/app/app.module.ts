import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import { DynamicMaterialFormComponent } from './dynamic-material-form/dynamic-material-form.component';
import { JsonFormComponent } from './json-form/json-form.component';
import { MatFormComponent } from './mat-form/mat-form.component';
import { MaterialUnitModule } from './material-unit/material-unit.module';


@NgModule({
  declarations: [
    AppComponent,
    DynamicMaterialFormComponent,
    JsonFormComponent,
    MatFormComponent
  ],
  imports: [
    BrowserModule
    , ReactiveFormsModule
    , BrowserAnimationsModule
    , DynamicFormsCoreModule.forRoot()
    , DynamicFormsMaterialUIModule
    , MaterialUnitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
