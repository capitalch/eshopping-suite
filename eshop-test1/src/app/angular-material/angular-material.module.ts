import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule
  , MatCheckboxModule
  , MatInputModule
  , MatRadioModule
  , MatSelectModule
  , MatDatepickerModule
  , MatAutocompleteModule
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
    , MatAutocompleteModule
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
    , MatIconModule
    , MatAutocompleteModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
