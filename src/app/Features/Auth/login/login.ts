import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html'
})
export class Login {

  router = inject(Router);
  msalService = inject(MsalService);

  async loginWithMicrosoft() {

    await this.msalService.instance.initialize();

    this.msalService.loginRedirect({
      scopes: [
        'api://39bc896f-6302-486e-ba57-9e3237abc2b8/access_as_user'
      ]
    });
  }
}