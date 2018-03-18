import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import { DynamicMaterialFormComponent } from './dynamic-material-form/dynamic-material-form.component';
import { JsonFormComponent } from './json-form/json-form.component';
import { MatFormComponent } from './mat-form/mat-form.component';
import { MaterialUnitModule } from './material-unit/material-unit.module';
import { Html5FormComponent } from './html5-form/html5-form.component';
import { MatDirective } from './mat/mat.directive';
import { MatButtonComponent } from './mat-button/mat-button.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { JsonFormService } from './json-form/json-form.service';
import { HttpModule } from '@angular/http';
import { UserService } from './html5-form/user.service';



@NgModule({
  declarations: [
    AppComponent,
    DynamicMaterialFormComponent,
    JsonFormComponent,
    MatFormComponent,
    Html5FormComponent,
    MatDirective,
    MatButtonComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , ReactiveFormsModule
    , BrowserAnimationsModule
    , DynamicFormsCoreModule.forRoot()
    , DynamicFormsMaterialUIModule
    , MaterialUnitModule
    , HttpModule
  ],
  providers: [JsonFormService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
