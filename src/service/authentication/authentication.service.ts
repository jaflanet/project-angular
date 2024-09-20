import { HttpClient } from '@angular/common/http';
import { afterRender, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'https://dummyjson.com/auth/login';
  private tokenKey = 'authToken';
  public hasToken!: boolean;

  constructor(private http: HttpClient) {
    afterRender(() => {
      this.hasToken = !!localStorage.getItem(this.tokenKey);
    });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password }).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
