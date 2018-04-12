import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule
  , MatCheckboxModule
  , MatInputModule
  , MatRadioModule
} from '@angular/material';
// import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule
    , MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatRadioModule
  ],
  exports: [
    MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatRadioModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
