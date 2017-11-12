import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MyLazyComponent } from '../lazy/my-lazy/my-lazy.component';
export const routes : Routes = [
    {
      path: '',
      component: MyLazyComponent  
    }
  ];