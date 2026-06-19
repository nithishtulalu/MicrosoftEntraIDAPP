import { PublicClientApplication , BrowserCacheLocation } from "@azure/msal-browser";

export const msalInstance = new PublicClientApplication({
    auth: {
        clientId: 'e63d4ec6-02ca-4964-a4cf-cf7cea73b2d3',
        authority: 'https://login.microsoftonline.com/60e3a48c-63bc-439d-94d2-31f18ddcff5e',
        redirectUri: 'http://localhost:4200',
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
    scopes: ['api://39bc896f-6302-486e-ba57-9e3237abc2b8/access_as_user']
};