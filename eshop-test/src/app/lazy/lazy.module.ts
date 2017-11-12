import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLazyComponent } from './my-lazy/my-lazy.component';
import {RouterModule} from '@angular/router';
import { routes } from './lazy.routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyLazyComponent],
  exports:[MyLazyComponent]
})
export class LazyModule { }
