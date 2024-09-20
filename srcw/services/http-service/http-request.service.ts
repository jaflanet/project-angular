import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataUser } from '../../app/app.entity';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private apiUrl =
    'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiUrl);
  }

  createUser(payload: DataUser){
    return this.http.post(this.apiUrl, payload)
  }
}
