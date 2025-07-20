import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HotToastModule } from '@ngneat/hot-toast';

const routes:Routes = [
  {
    path: '',
    loadComponent: () => import('./locations.component').then(m => m.LocationsComponent),
    
  },
  {
    path: 'add',
    loadComponent: () => import('./add-location/add-location.component').then(m => m.AddLocationComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./edit-location/edit-location.component').then(m => m.EditLocationComponent)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HotToastModule
  ]
})
export class LocationsModule { }
