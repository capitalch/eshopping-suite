import {RouterModule, Routes} from '@angular/router';
import { CompositeComponent } from './composite/composite.component';
// import { ProductComponent } from './product/product.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
export const routes : Routes =[
    {
      path: '',
      redirectTo:'composite'
    }
    , {
      path: 'composite',
      component:CompositeComponent//,
      //pathMatch:'full',
    //   children: [
    //     { path: 'product/:catId', component: ProductComponent },
    //     { path: 'productDetails', component: ProductDetailsComponent }
    //   ]
    }
  ];