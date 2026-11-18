import type { ApolloClient } from "@apollo/client";

import { GET_EMPLOYEE_BY_USER_ID } from "../graphql/queries";

export const getEmployeeForCurrentUser = async (
    client: ApolloClient,
    userId: string
) => {
    try {
        const { data } = await client.query({
            query: GET_EMPLOYEE_BY_USER_ID,
            variables: { userId }
        });

        return data!.employeeByUserId;
    } catch(err) {
        console.error(err);
        return null;
    }
}