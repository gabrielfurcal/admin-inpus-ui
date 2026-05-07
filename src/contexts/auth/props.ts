export type User = {
    id: string;
    name: string;
}

export type AuthState = {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}