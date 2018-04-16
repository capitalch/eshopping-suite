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
    , MatNativeDateModule
    ,MatIconModule
  ],
  exports: [
    MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatRadioModule
    , MatSelectModule
    , MatDatepickerModule
    , MatNativeDateModule
    ,MatIconModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
