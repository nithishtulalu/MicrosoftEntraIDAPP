import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

import {
  PublicClientApplication,
  BrowserCacheLocation
} from '@azure/msal-browser';

import {
  MsalService,
  MSAL_INSTANCE
} from '@azure/msal-angular';

export function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: 'e63d4ec6-02ca-4964-a4cf-cf7cea73b2d3',
      authority:
        'https://login.microsoftonline.com/60e3a48c-63bc-439d-94d2-31f18ddcff5e',
      redirectUri: 'http://localhost:4200'
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage
    }
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),

    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },

    MsalService
  ]
};