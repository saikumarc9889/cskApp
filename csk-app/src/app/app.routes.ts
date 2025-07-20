import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
        children:[
            {
                path: 'locations',
                loadChildren: () => import('./apps/locations/locations.module').then(m => m.LocationsModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./apps/users/users.module').then(m => m.UsersModule)
            },
            {
                path:'clients',
                loadChildren: () => import('./apps/clients/clients.module').then(m => m.ClientsModule)
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./shared/login/login.component').then(m => m.LoginComponent)
    },

];
