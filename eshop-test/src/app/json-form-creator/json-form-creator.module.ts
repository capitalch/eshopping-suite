import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JxFormComponent } from './jx-form/jx-form.component';
import { JxArrayComponent } from './jx-array/jx-array.component';
import { JxGroupComponent } from './jx-group/jx-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[],
  declarations: [JxFormComponent, JxArrayComponent, JxGroupComponent]
})
export class JsonFormCreatorModule { }
