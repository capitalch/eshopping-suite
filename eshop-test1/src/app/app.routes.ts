import {RouterModule, Routes} from '@angular/router';
import {DashBoardComponent} from './dash-board/dash-board.component';
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
      path:'dashBoard',
      component:DashBoardComponent
    }
  ];