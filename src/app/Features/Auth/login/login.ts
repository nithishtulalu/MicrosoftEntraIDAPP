import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

import { apiRequest } from '../msal.config';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html'
})
export class Login {

  router = inject(Router);
  msalService = inject(MsalService);

  async loginWithMicrosoft() {

    await this.msalService.instance.initialize();

    this.msalService.loginRedirect({
      scopes: apiRequest.scopes
    });
  }
}