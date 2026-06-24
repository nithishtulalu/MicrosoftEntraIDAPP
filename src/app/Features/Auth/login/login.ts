import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

import { AuthService } from '../../../core/Services/services/auth.service';
import { environment } from '../../../../enviroments/environments';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html'
})
export class Login implements OnInit {

  router = inject(Router);
  msalService = inject(MsalService);
  authService = inject(AuthService);

  loginData = {
    email: '',
    password: ''
  };

  async ngOnInit() {

    await this.msalService.instance.initialize();

    this.msalService.instance
      .handleRedirectPromise()
      .then((result: AuthenticationResult | null) => {

        if (result) {

          console.log('ACCESS TOKEN');
          console.log(result.accessToken);

          localStorage.setItem(
            'ms_access_token',
            result.accessToken
          );

          this.router.navigate(['/home']);
        }
      })
      .catch(error => {
        console.error('MSAL ERROR:', error);
      });
  }

  login() {

    this.authService.login(this.loginData)
      .subscribe({
        next: (response: any) => {

          console.log(response);

          localStorage.setItem('token', response.token);

          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error(error);
          alert('Invalid Email or Password');
        }
      });
  }

  async loginWithMicrosoft() {

  await this.msalService.instance.initialize();

 this.msalService.loginRedirect({
  scopes: [
    `api://${environment.apiClientId}/${environment.apiScope}`
  ],
  prompt: 'select_account'
});
}
}