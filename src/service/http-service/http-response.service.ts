import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataUser } from '../../app/app.entity';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private apiUrl =
    'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/account-balance';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiUrl);
  }

  getUserById(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  createUser(payload: DataUser) {
    return this.http.post(this.apiUrl, payload);
  }

  updateUser(id: string, payload: DataUser) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, payload);
  }

  deleteUser(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
