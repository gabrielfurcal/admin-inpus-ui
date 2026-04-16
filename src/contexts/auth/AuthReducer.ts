import { AuthState } from "./types";

type AuthAction =
 | { type: "LOGIN"; payload: { user: any; token: string } }
 | { type: "LOGOUT" };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
            };
        case "LOGOUT":
            return {
                user: null,
                token: null,
                isAuthenticated: false,
            }
        default:
            return state;
    }
}