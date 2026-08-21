import { AuthState } from "./props";

type AuthAction =
 | { type: "LOGIN"; payload: { user: any; token: string, refreshToken: string } }
 | { type: "LOGOUT" };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload.user,
                token: action.payload.token,
                refreshToken: action.payload.refreshToken,
                isAuthenticated: true,
            };
        case "LOGOUT":
            return {
                user: null,
                token: null,
                refreshToken: null,
                isAuthenticated: false,
            }
        default:
            return state;
    }
}