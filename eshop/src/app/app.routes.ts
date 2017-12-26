import { RouterModule, Routes } from '@angular/router';
import { EmartComponent } from './emart/emart.component';
// import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'emart',
        pathMatch: 'full'
    },
    {
        path: 'emart',
        // component: EmartComponent
        loadChildren:'./emart/emart.module#EmartModule',
        pathMatch: 'full'
    }
    // ,{
    //     path:'test',
    //     component:TestComponent
    // }
]