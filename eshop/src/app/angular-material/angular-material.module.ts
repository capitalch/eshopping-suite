import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatPaginatorModule
  ],
  exports: [
    MatButtonModule, MatIconModule, MatPaginatorModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
