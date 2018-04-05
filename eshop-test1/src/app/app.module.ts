import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JxFormService } from './jx-form.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { JxFormComponent } from './jx-form/jx-form.component';
import { JxGroupComponent } from './jx-group/jx-group.component';
import { JxArrayComponent } from './jx-array/jx-array.component';
import { JxErrorComponent } from './jx-error/jx-error.component';
import { JxCheckboxGroupComponent } from './jx-checkbox-group/jx-checkbox-group.component';
import {
  JxTextareaComponent
  , JxCheckboxComponent
  , JxRadioComponent
  , JxSelectComponent
  , JxDefaultComponent

} from './jx-controls/core.component';
// import { JxTextareaComponent } from './jx-controls/core/textarea.component';
// import { JxCheckboxComponent } from './jx-controls/core/checkbox.component';
// import { JxRadioComponent } from './jx-controls/core/radio.component';
// import { JxSelectComponent } from './jx-controls/core/select.component';
// import { JxDefaultComponent } from './jx-controls/core/default.component';
import { BrokerService } from './broker.service';




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
  ],
  imports: [
    BrowserModule
    , FormsModule
    , ReactiveFormsModule
    , HttpClientModule
    , AngularMaterialModule
  ],
  providers: [JxFormService, BrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
