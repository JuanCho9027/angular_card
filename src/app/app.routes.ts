import { Routes } from '@angular/router';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplo2/ejemplo2.component';

export const routes: Routes = [ 
    {
        path: '',
        component: Ejemplo1Component
    },
    {
        path: '2',
        component: Ejemplo2Component
    }
];
