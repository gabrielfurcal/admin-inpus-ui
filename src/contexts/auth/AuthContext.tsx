import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { GENERAT_JWT_TOKEN_URL } from '../../constants';
import { authReducer } from './AuthReducer';
import { AuthState, AuthStatus, User } from './props';

interface _AuthContextProps extends AuthState {
    login: (user: User, token: string, refreshToken: string) => void;
    logout: () => void;
    hasPermissions: (requiredPermissions: string[]) => boolean;
}

const initialState: AuthState = {
    user: null,
    token: null,
    refreshToken: null,
    authStatus: AuthStatus.Unauthenticated
};

type LoginResponse = {
    jwt: string;
    refreshToken: string;
}

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
        const refreshToken = localStorage.getItem("refreshToken");
        const user = localStorage.getItem("user");

        if (token && user) {
            const { exp } = jwtDecode<{ exp?: number }>(token);
            const expiresAt = typeof exp === 'number' ? new Date(exp * 1000) : null;

            if(expiresAt! <= new Date()) {
                return {
                    user: JSON.parse(user),
                    token,
                    refreshToken,
                    authStatus: AuthStatus.TokenExpired
                }

            } else {
                return {
                    user: JSON.parse(user),
                    token,
                    refreshToken,
                    authStatus: AuthStatus.Authenticated
                };
            }
        }

        return init;
    });

    useEffect(() => {
        const checkSession = async () => {
            if(state.authStatus === AuthStatus.TokenExpired) {
                const response = await axios.post<LoginResponse>(GENERAT_JWT_TOKEN_URL, {
                    id: null,
                    tokenHash: state.refreshToken
                });

                if (response.status === 200) {
                    localStorage.setItem("token", response.data.jwt);
                    localStorage.setItem("refreshToken", response.data.refreshToken);
                    localStorage.setItem("user", JSON.stringify(state.user));

                    dispatch({ type: "LOGIN", payload: { user: state.user, token: response.data.jwt, refreshToken: response.data.refreshToken } });
                }
                else {
                    clearLoginStorage();
                    dispatch({ type: "LOGOUT" });
                }
            }
        }

        void checkSession();
    }, []);

    const login = (user: any, token: string, refreshToken: string) => {
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({ type: "LOGIN", payload: { user, token, refreshToken } });
    }

    const logout = () => {
        clearLoginStorage();
        dispatch({ type: "LOGOUT" });
    }

    const hasPermissions = (requiredPermissions: string[]): boolean => {
        const user = localStorage.getItem("user");

        if(user) {
            const userObj: User = JSON.parse(user);
            return requiredPermissions.some((permission) => userObj.permissions.includes(permission));
        }
        
        return false;
    }

    return (
        <AUTH_CONTEXT.Provider value={{ ...state, login, logout, hasPermissions }}>
            { children }
        </AUTH_CONTEXT.Provider>
    )
}

const clearLoginStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
}