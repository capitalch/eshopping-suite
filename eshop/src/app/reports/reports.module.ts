import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositeComponent } from './composite/composite.component';
import { RouterModule } from '@angular/router';
import { routes } from './reports.routes';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [CompositeComponent]
})
export class ReportsModule { }
