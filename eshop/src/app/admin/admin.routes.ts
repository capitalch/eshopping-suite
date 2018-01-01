import {RouterModule, Routes} from '@angular/router';
import { CompositeComponent } from './composite/composite.component';
export const routes : Routes =[
    {
      path: '',
      redirectTo:'composite',
    }
    , {
      path: 'composite',
      component:CompositeComponent
    //   ,
    //   children: [
    //     { path: 'product/:catId', component: ProductComponent },
    //     { path: 'productDetails', component: ProductDetailsComponent }
    //   ]
    }
  ];