import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule
  , MatCheckboxModule
  , MatInputModule
  , MatRadioModule
  , MatSelectModule
  , MatDatepickerModule
  // , NativeDateModule
  // , MatNativeDateModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

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
    // , NativeDateModule
    , MatMomentDateModule
    , MatIconModule
  ],
  exports: [
    MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatRadioModule
    , MatSelectModule
    , MatDatepickerModule
    // , NativeDateModule
    // , MatNativeDateModule
    , MatMomentDateModule
    ,MatIconModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
