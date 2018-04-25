import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JsonFormCreatorModule} from '../json-form-creator/json-form-creator.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
    ,JsonFormCreatorModule
  ],
  exports:[ProfileComponent],
  declarations: [ProfileComponent]
})
export class ImplementationModule { }
