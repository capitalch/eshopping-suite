import {RouterModule, Routes} from '@angular/router';

export const routes : Routes = [
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: 'lazy',
      loadChildren: './lazy/lazy.module#LazyModule' 
    }
  ];