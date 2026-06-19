import { Injectable } from "@angular/core";
import{ HttpClient } from "@angular/common/http";

import { environment } from '../../../enviroments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  getProfile(token: string) {

    return this.http.get(
      environment.apiUrl,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}
