import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositeComponent } from './composite/composite.component';
import { DealerComponent } from './dealer/dealer.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { routes } from './b2b.routes';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [CompositeComponent, DealerComponent, ProductComponent]
})
export class B2bModule { }
