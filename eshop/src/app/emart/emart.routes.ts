import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {EmartComponent} from './emart.component';
// import {BodyComponent} from './body/body.component';

export const routes : Routes = [
    {
      path: '',
      component: EmartComponent  
    }
  ];