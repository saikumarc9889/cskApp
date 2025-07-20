import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Locations } from '../form/location.form';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl = 'https://api.example.com/locations'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get<Locations[]>(this.apiUrl);
  }

  getLocationById(id: number) {
    return this.http.get<Locations>(`${this.apiUrl}/${id}`);
  }

  createLocation(location: Locations) {
    return this.http.post<Locations>(this.apiUrl, location);
  }

  updateLocation(location: Locations) {
    return this.http.put<Locations>(`${this.apiUrl}/${location.id}`, location);
  }

  deleteLocation(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
