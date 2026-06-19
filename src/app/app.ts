import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { inject } from '@angular/core';
import { ProfileService } from './core/Services/profile.service';
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
    if (response?.account) {

      this.msalservice.instance.setActiveAccount(
        response.account
      );

      const tokenResponse =
        await this.msalservice.instance.acquireTokenSilent({
          scopes: [
            'api://39bc896f-6302-486e-ba57-9e3237abc2b8/access_as_user'
          ],
          account: response.account
        });

      console.log(
        'Access Token',
        tokenResponse.accessToken
      );

      localStorage.setItem(
        'access_token',
        tokenResponse.accessToken
      );

      this.profileService
        .getProfile(tokenResponse.accessToken)
        .subscribe({
          next: (res) => {
            console.log('Profile', res);
          },
          error: (err) => {
            console.log('FULL ERROR');
            console.log(err);
          }
        });

      this.router.navigate(['/home']);
    }
  }
}