import { RouterModule, Routes } from '@angular/router';
import { Composite1Component } from './composite1/composite1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';

export const routes : Routes= [
    {
        path: '',
        redirectTo:'composite1'
    }
    ,{
            path: 'composite1',
            component: Composite1Component,
            children:
                [
                    { path: 'comp2', component: Comp2Component },
                    { path: 'comp3', component: Comp3Component}
                ]
    
        }
]