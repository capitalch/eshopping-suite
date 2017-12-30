import { RouterModule, Routes } from '@angular/router';
import { EmartComponent } from './emart/emart.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Composite1Component } from './composite1/composite1.component';
// import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'composite1',
        pathMatch: 'full'
    },
    {
        path: 'emart',
        // component: EmartComponent
        loadChildren:'./emart/emart.module#EmartModule',
        pathMatch: 'full'
    },
    {
        path:'comp1',
        component:Comp1Component
    },
    {
        path:'comp2',
        component:Comp2Component,
        pathMatch: 'full'
    },
    {
        path:'comp3',
        component:Comp3Component
    },
    {
        path:'composite1',
        component:Composite1Component
    }
    // ,{
    //     path:'test',
    //     component:TestComponent
    // }
]