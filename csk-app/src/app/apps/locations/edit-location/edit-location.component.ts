import { Component, OnInit } from '@angular/core';
import { LocationFormComponent } from '../location-form/location-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cmp-edit-location',
  imports: [LocationFormComponent],
  templateUrl: './edit-location.component.html',
  styleUrl: './edit-location.component.scss'
})
export class EditLocationComponent implements OnInit {

  locationData!: any;

  id!:number

  constructor(private activatedRoute: ActivatedRoute) {
    // Assuming you have a service to fetch the location data
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id; 
      console.log('EditLocationComponent initialized with ID:', this.id);
      
    }
  }

  private fetchLocationData(id: number) {
    // Simulate an API call to fetch location data
    this.locationData = {
      id: id,
      label: 'Location ' + id,
      code: 'LOC' + id
    };
  }

  // This can be replaced with actual logic to fetch the location data based on the ID
  ngOnInit() {
    // Simulate fetching location data
    this.fetchLocationData(this.id);
  }

}
