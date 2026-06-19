import { Injectable } from "@angular/core";
import{ HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  getProfile(token: string) {

    return this.http.get(
      'https://localhost:7231/api/Profile',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}
