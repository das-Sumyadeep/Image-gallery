import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL = 'https://picsum.photos/v2/list?page=2&limit=100';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private http = inject(HttpClient);
  constructor() { }
  getImage() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Example of adding Content-Type header
      // Add other headers if needed
    });
    return this.http.get(BASE_URL, { headers });
  }
}
