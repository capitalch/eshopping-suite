import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatIconModule
  ],
  exports: [
    MatButtonModule, MatIconModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
