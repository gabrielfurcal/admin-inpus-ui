import React, { createContext, useContext, useReducer, useState } from 'react';

import { authReducer } from './AuthReducer';
import { AuthState } from './types';

const AUTH_CONTEXT = createContext<any>(null);

export const useAuth = () => useContext(AUTH_CONTEXT);

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

export const AuthContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (user: any, token: string) => {
        dispatch({ type: "LOGIN", payload: { user, token } });
    }

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    }

    return (
        <AUTH_CONTEXT.Provider value={{ ...state, login, logout }}>
            { children }
        </AUTH_CONTEXT.Provider>
    )
}