import { PublicClientApplication, BrowserCacheLocation } from '@azure/msal-browser';

import { environment } from '../../../enviroments/environments';

export const msalInstance = new PublicClientApplication({
    auth: {
        clientId: environment.clientId,
        authority: environment.authority,
        redirectUri: environment.redirectUri,
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,

    },
});
export const loginRequest = {
    scopes: [
        'openid',
        'profile',
        'User.Read'
    ]
};
export const apiRequest={
    scopes: [`api://${environment.apiClientId}/${environment.apiScope}`]
};