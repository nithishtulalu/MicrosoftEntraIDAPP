import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

import { MsalService, MSAL_INSTANCE } from '@azure/msal-angular';

import { msalInstance } from './Features/Auth/msal.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),

    {
      provide: MSAL_INSTANCE,
      useValue: msalInstance
    },

    MsalService
  ]
};