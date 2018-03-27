import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { CompositeComponent } from './composite/composite.component';
export const routes : Routes =[
    {
      path: '',
      redirectTo:'login',
    }
    ,
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'composite',
      component:CompositeComponent
    //   ,
    //   children: [
    //     { path: 'product/:catId', component: ProductComponent },
    //     { path: 'productDetails', component: ProductDetailsComponent }
    //   ]
    }
  ];