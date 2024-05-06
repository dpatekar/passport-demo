# Build and run
```bash
npm install
npm run build
npm run serve
```

# Open questions
- Can we reduce the bundle size?
- Cookies console warnings?
- How to check if a user is already logged in without calling 'eth_requestAccounts'?
- Can we avoid login redirects?
- How to handle logout?

# Samples
passportInstance.loginCallback();
window.addEventListener('load', function() {
  passportInstance.loginCallback();
});

const passportProvider = passportInstance.connectEvm();
The login flow is triggered by calling the requestAccounts RPC on the Passport provider:
const accounts = await provider.request({ method: "eth_requestAccounts" });

await passportInstance.logout();

const userProfile = await passportInstance.getUserInfo();

const linkedAddresses = await passportInstance.getLinkedAddresses();

//https://docs.immutable.com/docs/zkEVM/products/passport/identity/jwt
//https://docs.immutable.com/zkevm/api/reference/#/operations/getUserInfo
//https://jwt.io/libraries
const accessToken: string | undefined = await passportInstance.getAccessToken();
const idToken: string | undefined = await passportInstance.getIdToken();