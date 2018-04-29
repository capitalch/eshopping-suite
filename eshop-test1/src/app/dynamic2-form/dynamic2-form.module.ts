import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Form2Component } from './form2/form2.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { Dynamic2ControlComponent } from './dynamic2-control/dynamic2-control.component';
import { Jx2TextareaComponent } from './core/core.components';

@NgModule({
  imports: [
    CommonModule
    , ReactiveFormsModule
    , AngularMaterialModule
  ],
  declarations: [Form2Component, Dynamic2ControlComponent, Jx2TextareaComponent]
  , exports: [Form2Component]
  , entryComponents: [
    // Dynamic2ControlComponent
    Jx2TextareaComponent
  ]
})
export class Dynamic2FormModule { }
