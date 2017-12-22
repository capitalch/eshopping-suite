import {RouterModule, Routes} from '@angular/router';
import {JbodyComponent} from './jbody/jbody.component';
import {JproductComponent} from './jproduct/jproduct.component';
import {JproductDetailsComponent} from './jproduct-details/jproduct-details.component';
export const routes : Routes = [
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
      path:'jbody',
      component:JbodyComponent,
      children:[
        {
          path:'jproduct',
          component:JproductComponent
        },
        {
          path:'jdetails',
          component:JproductDetailsComponent,
          pathMatch:'full'
        }
      ]
    }
  ];
