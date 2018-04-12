import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JxService } from './jx-service/jx.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { JxFormComponent } from './jx-form/jx-form.component';
import { JxGroupComponent } from './jx-group/jx-group.component';
import { JxArrayComponent } from './jx-array/jx-array.component';
import { JxErrorComponent } from './jx-controls/jx-error/jx-error.component';
import { JxCheckboxGroupComponent } from './jx-controls/jx-checkbox-group/jx-checkbox-group.component';
import {
  JxTextareaComponent
  , JxCheckboxComponent
  , JxRadioComponent
  , JxSelectComponent
  , JxDefaultComponent

} from './jx-controls/core.components';
import { JxMatCheckboxComponent } from './jx-controls/mat.components';

import { BrokerService } from './broker.service';
// import { JxChildrenComponent } from './jx-children/jx-children.component';
import { JxStubComponent } from './jx-stub/jx-stub.component';


@NgModule({
  declarations: [
    AppComponent
    , JxFormComponent
    , JxGroupComponent
    , JxArrayComponent
    , JxErrorComponent
    , JxCheckboxGroupComponent
    , JxTextareaComponent
    , JxCheckboxComponent
    , JxRadioComponent
    , JxSelectComponent
    , JxDefaultComponent
    , JxMatCheckboxComponent
    // , JxChildrenComponent
    , JxStubComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , ReactiveFormsModule
    , HttpClientModule
    , AngularMaterialModule
  ],
  providers: [JxService, BrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
