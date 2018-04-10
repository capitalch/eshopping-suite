import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JxService } from './jx-service/jx.service';
import { BrokerService } from './broker.service';
import { HttpClientModule } from '@angular/common/http';
import { JxFormComponent } from './jx-form/jx-form.component';
import { JxArrayComponent } from './jx-array/jx-array.component';
import { JxGroupComponent } from './jx-group/jx-group.component';
import { JxCheckboxGroupComponent } from './jx-controls/jx-checkbox-group/jx-checkbox-group.component';
import { JxErrorComponent } from './jx-controls/jx-error/jx-error.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import {
  JxTextareaComponent
  , JxCheckboxComponent
  , JxRadioComponent
  , JxSelectComponent
  , JxDefaultComponent
} from './jx-controls/core.components';
import { JxMatCheckboxComponent } from './jx-controls/mat.components';
import { JxStubComponent } from './jx-stub/jx-stub.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  declarations: [
    JxFormComponent, 
    JxArrayComponent, 
    JxGroupComponent, 
    JxCheckboxGroupComponent, 
    JxErrorComponent,
    JxTextareaComponent,
    JxCheckboxComponent,
    JxRadioComponent,
    JxSelectComponent,
    JxDefaultComponent,
    JxStubComponent,
    JxMatCheckboxComponent
  ],
  providers: [JxService, BrokerService],
  exports:[JxFormComponent]
})
export class JsonFormCreatorModule { }
