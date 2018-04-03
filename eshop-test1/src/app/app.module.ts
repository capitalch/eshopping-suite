import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import { DynamicMaterialFormComponent } from './dynamic-material-form/dynamic-material-form.component';
import { JsonFormComponent } from './json-form/json-form.component';
// import { MatFormComponent } from './mat-form/mat-form.component';
// import { MaterialUnitModule } from './material-unit/material-unit.module';
import { Html5FormComponent } from './html5-form/html5-form.component';
// import { MatDirective } from './mat/mat.directive';
// import { MatButtonComponent } from './mat-button/mat-button.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { JsonFormService } from './json-form/json-form.service';
import { UserService } from './html5-form/user.service';
import { HttpClientModule } from '@angular/common/http';
import { GroupChildComponent } from './group-child/group-child.component';
import { GroupArrayComponent } from './group-array/group-array.component';
import { JsonxFormComponent } from './jsonx-form/jsonx-form.component';
import { GroupxChildComponent } from './groupx-child/groupx-child.component';
import { GroupxArrayComponent } from './groupx-array/groupx-array.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { Child1NestComponent } from './child1-nest/child1-nest.component';
import { Child2NestComponent } from './child2-nest/child2-nest.component';
import { Child3NestComponent } from './child3-nest/child3-nest.component';
import { Child4NestComponent } from './child4-nest/child4-nest.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';



@NgModule({
  declarations: [
    AppComponent,
    DynamicMaterialFormComponent,
    JsonFormComponent,
    // MatFormComponent,
    Html5FormComponent,
    // MatDirective,
    // MatButtonComponent,
    ErrorMessageComponent,
    GroupChildComponent,
    GroupArrayComponent,
    JsonxFormComponent,
    GroupxChildComponent,
    GroupxArrayComponent,
    CheckboxGroupComponent,
    Child1NestComponent,
    Child2NestComponent,
    Child3NestComponent,
    Child4NestComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , ReactiveFormsModule
    , BrowserAnimationsModule
    , DynamicFormsCoreModule.forRoot()
    , DynamicFormsMaterialUIModule
    // , MaterialUnitModule
    , HttpClientModule
    , AngularMaterialModule
  ],
  providers: [JsonFormService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
