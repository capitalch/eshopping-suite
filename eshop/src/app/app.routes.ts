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
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'b2b',
        loadChildren: './b2b/b2b.module#B2bModule'
    },
    {
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule'
    }
]