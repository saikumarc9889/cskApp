import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'cmp-locations',
  imports: [CommonModule, CardModule, TableModule, ButtonModule, FormsModule, PaginatorModule,RouterModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {

  locations:any[] = [
    { id:1,label :'Location 1', code:'LOC1' },
    { id:2,label :'Location 2', code:'LOC2' },
    { id:3,label :'Location 3', code:'LOC3' }
  ]

}
