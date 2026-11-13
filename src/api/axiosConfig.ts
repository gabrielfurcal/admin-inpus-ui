import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { GENERAT_JWT_TOKEN_URL } from "../constants";

type RefreshTokenResponse = {
    jwt: string;
    refreshToken: string;
}

axios.interceptors.request.use(async (config) => {
    let token = window.localStorage.getItem("token");

    if(token) {
        const { exp } = jwtDecode<{ exp?: number }>(token);
        const expiresAt = typeof exp === "number" ? new Date(exp * 1000) : null;

        if(expiresAt! <= new Date()) {
            const refreshTokenResponse = await refreshToken();
            token = refreshTokenResponse.data.jwt;
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshTokenResponse.data.refreshToken);
        }

        config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
});

const refreshClient = axios.create();

const refreshToken = async () => {
    const response = await refreshClient.post<RefreshTokenResponse>(GENERAT_JWT_TOKEN_URL, {
        id: null,
        tokenHash: localStorage.getItem("refreshToken")
    });
    return response;
}