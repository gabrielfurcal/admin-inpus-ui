export type User = {
    id: string;
    name: string;
    permissions: string[];
}

export type AuthState = {
    user: User | null;
    token: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
}