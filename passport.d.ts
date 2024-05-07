export declare function init(isProd: boolean, clientId: string, publishableKey: string, redirectUri: string, logoutRedirectUri: string): void;
export declare function login(): Promise<any>;
export declare function logout(): Promise<void>;
export declare function loginCallback(): Promise<void>;
export declare function getUserInfo(): Promise<{
    email?: string | undefined;
    nickname?: string | undefined;
    sub: string;
} | undefined>;
export declare function getEmail(): Promise<string | undefined>;
export declare function getAccessToken(): Promise<string | undefined>;
export declare function isLoggedIn(): Promise<boolean | undefined>;
