import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  hostUrl: 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.hostUrl);
  }
}
