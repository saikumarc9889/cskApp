import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'cmp-layout',
  imports: [RouterModule, PanelMenuModule, NgIf,ButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  title = 'ANGSIM';

  sidebarItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/']
    },
    {
      label: 'Clients',
      icon: 'pi pi-fw pi-users',
      routerLink: ['/clients']
    },
    {
      label: 'Locations',
      icon: 'pi pi-fw pi-map-marker',
      routerLink: ['/locations']
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-users',
      routerLink: ['/users']
    },
    
  ];

  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  profile() {
    // Navigate to profile or show profile dialog
    alert('Profile clicked');
  }
}
