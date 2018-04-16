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
<<<<<<< HEAD
    , MatNativeDateModule
    ,MatIconModule
=======
    // , MatNativeDateModule
    // , NativeDateModule
    , MatMomentDateModule
>>>>>>> 16a5fa38cce314ce4becf582b5c2fe9bdb187334
  ],
  exports: [
    MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatRadioModule
    , MatSelectModule
    , MatDatepickerModule
<<<<<<< HEAD
    , MatNativeDateModule
    ,MatIconModule
=======
    // , NativeDateModule
    // , MatNativeDateModule
    , MatMomentDateModule
>>>>>>> 16a5fa38cce314ce4becf582b5c2fe9bdb187334
  ],
  declarations: []
})
export class AngularMaterialModule { }
