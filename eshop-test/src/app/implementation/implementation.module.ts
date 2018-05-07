import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {GxDynamicFormModule} from '../gx-dynamic-form/gx-dynamic-form.module';
import { ProfileComponent } from './profile/profile.component';
import { GxCustomService } from '../service/gx-custom.service';

@NgModule({
  imports: [
    CommonModule
    ,GxDynamicFormModule
    , HttpClientModule
  ],
  exports:[ProfileComponent],
  declarations: [ProfileComponent],
  providers: [
    GxCustomService
  ]
})
export class ImplementationModule { }
