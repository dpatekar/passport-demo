import { config, passport } from '@imtbl/sdk';

const PUBLISHABLE_KEY = 'pk_imapik-test-Kb2kJHJ4f$1xQElBPrek';
const CLIENT_ID = '7ApcuoSAIKF0zA0I7OAm5rDov7HiIstr';

const passportInstance = new passport.Passport({
  baseConfig: {
    environment: config.Environment.SANDBOX,
    publishableKey: PUBLISHABLE_KEY,
  },
  clientId: CLIENT_ID,
  redirectUri: 'http://localhost:3000/redirect.html',
  logoutRedirectUri: 'http://localhost:3000',
  audience: 'platform_api',
  scope: 'openid offline_access email transact',
});

export async function login() {
  const passportProvider = passportInstance.connectEvm();
  return await passportProvider.request({ method: "eth_requestAccounts" });
}

export async function logout() {  
  await passportInstance.logout();
}

export async function loginCallback() {
  passportInstance.loginCallback();
}

export async function userInfo() {
  return await passportInstance.getUserInfo();
}

export async function getToken() {
  return await passportInstance.getAccessToken();
}