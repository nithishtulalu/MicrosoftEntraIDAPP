import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private msalService = inject(MsalService);
  private router = inject(Router);

  private apiUrl = 'https://localhost:7231/api/Auth';

  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
  logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('ms_access_token');

    sessionStorage.clear();


    // Check if a Microsoft account is signed in
    const accounts = this.msalService.instance.getAllAccounts();

    if (accounts.length > 0) {

      this.msalService.logoutRedirect({
        postLogoutRedirectUri: window.location.origin + '/login'
      });

    } else {

      this.router.navigate(['/login']);

    }
  }
}
