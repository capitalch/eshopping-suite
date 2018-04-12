import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule],
  declarations: []
})
export class AngularMaterialModule { }