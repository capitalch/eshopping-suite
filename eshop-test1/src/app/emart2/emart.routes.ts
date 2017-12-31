import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CompositeComponent } from './composite/composite.component';


export const routes: Routes = [
  {
    path: '',
    // component: EmartComponent,
    redirectTo:'composite'
  }
  , {
    path: 'composite',
    component:CompositeComponent,
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'productDetails', component: ProductDetailsComponent }
    ]
  }
];

