import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule
  , MatCheckboxModule
  , MatInputModule
  , MatRadioModule
  , MatSelectModule
  , MatDatepickerModule
  // , MatNativeDateModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
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
    // , MatNativeDateModule
    , MatMomentDateModule
  ],
  exports: [
    MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatRadioModule
    , MatSelectModule
    , MatDatepickerModule
    // , MatNativeDateModule
    , MatMomentDateModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
