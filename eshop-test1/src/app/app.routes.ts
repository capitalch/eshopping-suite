import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FurtherDetailsComponent } from './further-details/further-Details.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashBoard',
    pathMatch: 'full'
  },
  // , {
  //   path: 'lazy',
  //   loadChildren: './lazy/lazy.module#LazyModule' 
  // },
  {
    path: 'dashBoard',
    component: DashBoardComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'productDetails',
        component: ProductDetailsComponent
        // ,children: [
        //   {
        //     path: 'furtherDetails',
        //     component:FurtherDetailsComponent
        //   }
        // ]
      }
    ]
  }
];