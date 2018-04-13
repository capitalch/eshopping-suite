import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule
  , MatCheckboxModule
  , MatInputModule
  , MatRadioModule
  , MatSelectModule
  , MatDatepickerModule
  , MatNativeDateModule
} from '@angular/material';
// import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule
    , MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatRadioModule
    , MatSelectModule
    , MatDatepickerModule
    , MatNativeDateModule
  ],
  exports: [
    MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatRadioModule
    , MatSelectModule
    , MatDatepickerModule
    , MatNativeDateModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
