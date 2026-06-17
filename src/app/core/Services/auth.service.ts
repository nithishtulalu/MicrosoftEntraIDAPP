import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = '';

  constructor(private http: HttpClient) {}

  signup(data: any) {
    return this.http.post(
      `${this.apiUrl}/signup`,
      data
    );
  }

  login(data: any) {
    return this.http.post(
      `${this.apiUrl}/login`,
      data
    );
  }
}