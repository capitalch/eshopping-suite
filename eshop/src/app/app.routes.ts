import { RouterModule, Routes } from '@angular/router';
// import { CompositeComponent } from './emart/composite/composite.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'emart',
        pathMatch: 'full'
    },
    {
        path: 'emart',
        loadChildren: './emart/emart.module#EmartModule'
        //, pathMatch: 'full'
        // component:CompositeComponent,        
    }
]