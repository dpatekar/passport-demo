import { config, passport } from '@imtbl/sdk';

let passportInstance: passport.Passport | undefined;

export function init(isProd: boolean, clientId: string, publishableKey: string, redirectUri: string, logoutRedirectUri: string) {
  passportInstance = new passport.Passport({
    baseConfig: {
      environment: isProd ? config.Environment.PRODUCTION : config.Environment.SANDBOX,
      publishableKey: publishableKey,
    },
    clientId: clientId,
    redirectUri: redirectUri,
    logoutRedirectUri: logoutRedirectUri,
    audience: 'platform_api',
    scope: 'openid offline_access email transact',
  });
}

export async function login() {
  if (passportInstance) {
    const passportProvider = passportInstance.connectEvm();
    return await passportProvider.request({ method: "eth_requestAccounts" });
  }
}

export async function logout() {
  if (passportInstance) {
    await passportInstance.logout();
  }
}

export async function loginCallback() {
  if (passportInstance) {
    await passportInstance.loginCallback();
  }
}

export async function getUserInfo() {
  if (passportInstance) {
    return await passportInstance.getUserInfo();
  }
}

export async function getEmail() {
  if (passportInstance) {
    return (await getUserInfo())?.email;
  }
}

export async function getAccessToken() {
  if (passportInstance) {
    return await passportInstance.getAccessToken();
  }
}

export async function getIdToken() {
  if (passportInstance) {
    return await passportInstance.getIdToken();
  }
}

export async function isLoggedIn() {
  if (passportInstance) {
    return !!(await passportInstance.getAccessToken());
  }
}