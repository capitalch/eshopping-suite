import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatCardModule, MatFormFieldModule, MatInputModule
  ],
  exports: [
    MatButtonModule, MatIconModule, MatPaginatorModule, MatCardModule, MatFormFieldModule, MatInputModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
