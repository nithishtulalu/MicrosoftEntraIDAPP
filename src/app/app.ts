import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { inject } from '@angular/core';
import { ProfileService } from './core/Services/profile.service';

import { apiRequest } from './Features/Auth/msal.config';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MicrosoftEntraIDAPP');
  private msalservice = inject(MsalService);
  private router = inject(Router);
  private profileService = inject(ProfileService);
  async ngOnInit() {
    await this.msalservice.instance.initialize();
    const response = await this.msalservice.instance.handleRedirectPromise();
    const account =
      response?.account ??
      this.msalservice.instance.getAllAccounts()[0] ??
      null;

    if (account) {
      this.msalservice.instance.setActiveAccount(account);

      if (response?.account) {
        const tokenResponse =
          await this.msalservice.instance.acquireTokenSilent({
            scopes: apiRequest.scopes,
            account
          });

        console.log('Access Token', tokenResponse.accessToken);

        localStorage.setItem('access_token', tokenResponse.accessToken);

        this.profileService.getProfile(tokenResponse.accessToken).subscribe({
          next: (res) => {
            console.log('Profile', res);
          },
          error: (err) => {
            console.log('FULL ERROR');
            console.log(err);
          }
        });
      }

      this.router.navigate(['/home']);
    }
  }
}