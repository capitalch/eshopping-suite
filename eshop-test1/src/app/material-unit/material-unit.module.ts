import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule, MatFormFieldModule
  ],
  exports: [
    MatInputModule, MatFormFieldModule
  ],
  declarations: []
})
export class MaterialUnitModule { }
