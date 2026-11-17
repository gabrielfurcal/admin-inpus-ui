import { ApolloClient } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

import { GET_EMPLOYEE_BY_ID } from "../graphql/queries";

export const getEmployeeForCurrentUser = async (
    userId: string
) => {
    // const { data } = useQuery(GET_EMPLOYEE_BY_ID, { variables: { id: userId } })
}