import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataUser } from '../../app/app.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private apiUrl =
    'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/account-balance';

  constructor(private http: HttpClient) {}

  getData(): Observable<DataUser[]> {
    return this.http.get<DataUser[]>(this.apiUrl);
  }

  getUserById(id: string): Observable<DataUser> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<DataUser>(url);
  }

  createUser(payload: DataUser): Observable<DataUser> {
    return this.http.post<DataUser>(this.apiUrl, payload);
  }

  updateUser(id: string, payload: DataUser): Observable<DataUser> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<DataUser>(url, payload);
  }

  deleteUser(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
