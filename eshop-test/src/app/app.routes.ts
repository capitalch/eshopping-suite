import {RouterModule, Routes} from '@angular/router';
import { Tree1Component } from './tree1/tree1.component';
import { ManualTreeComponent } from './manual-tree/manual-tree.component';

export const routes : Routes = [
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: 'lazy',
      loadChildren: './lazy/lazy.module#LazyModule' 
    },{
      path:'manual',
      component:ManualTreeComponent
    },{
      path:'tree1',
      component:Tree1Component
    }
  ];