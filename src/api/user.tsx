import axios, { AxiosResponse } from "axios"

import { USERS_URL } from "../constants"
import { User } from "../types/security"

export type UserPageResponse = {
    users: User[],
    totalCount: number
}

export const getUsers = async (offset: number, limit: number): Promise<AxiosResponse<UserPageResponse>> => {
    const response = await axios.get<UserPageResponse>(`${USERS_URL}/Paginated?offset=${offset - 1}&limit=${limit}`);
    return response;
}

export const deactivateUser = async (id: string): Promise<AxiosResponse> => {
    const response = await axios.delete(`${USERS_URL}/${id}`);
    return response;
}