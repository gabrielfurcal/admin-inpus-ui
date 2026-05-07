import React, { createContext, useContext, useReducer } from 'react';

import { authReducer } from './AuthReducer';
import { AuthState, User } from './props';

interface _AuthContextProps extends AuthState {
    login: (user: User, token: string) => void;
    logout: () => void;
}

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

const AUTH_CONTEXT = createContext<_AuthContextProps | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AUTH_CONTEXT);

    if(!context) {
        throw new Error("useAuth must be used within AuthContext");
    }

    return context;
}

export const AuthContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState, (init) => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        if (token && user) {
            return {
                user: JSON.parse(user),
                token,
                isAuthenticated: true,
            };
        }

        return init;
    });

    const login = (user: any, token: string) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({ type: "LOGIN", payload: { user, token } });
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        dispatch({ type: "LOGOUT" });
    }

    return (
        <AUTH_CONTEXT.Provider value={{ ...state, login, logout }}>
            { children }
        </AUTH_CONTEXT.Provider>
    )
}