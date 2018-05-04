import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GxDynamicFormModule} from '../gx-dynamic-form/gx-dynamic-form.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
    ,GxDynamicFormModule
  ],
  exports:[ProfileComponent],
  declarations: [ProfileComponent]
})
export class ImplementationModule { }
