export declare function login(): Promise<any>;
export declare function logout(): Promise<void>;
export declare function loginCallback(): Promise<void>;
export declare function userInfo(): Promise<{
    email?: string | undefined;
    nickname?: string | undefined;
    sub: string;
} | undefined>;
export declare function getToken(): Promise<string | undefined>;
export declare function isLoggedIn(): Promise<boolean>;
