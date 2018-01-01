import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Composite1Component } from './composite1/composite1.component';
import { routes } from './emart1.routes';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [Composite1Component, Comp1Component, Comp2Component, Comp3Component]
})
export class Emart1Module { }