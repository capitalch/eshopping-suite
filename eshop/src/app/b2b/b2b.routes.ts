import {RouterModule, Routes} from '@angular/router';
import { CompositeComponent } from './composite/composite.component';
import { ProductComponent } from './product/product.component';
import { DealerComponent } from './dealer/dealer.component';
export const routes : Routes =[
    {
      path: '',
      redirectTo:'composite',
      //pathMatch:'full'
    }
    , {
      path: 'composite',
      component:CompositeComponent,
      children: [
        { path: 'product/:catId', component: ProductComponent },
        { path: 'productDetails', component: DealerComponent }
      ]
    }
  ];