import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatCardModule
  ],
  exports: [
    MatButtonModule, MatIconModule, MatPaginatorModule, MatCardModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
