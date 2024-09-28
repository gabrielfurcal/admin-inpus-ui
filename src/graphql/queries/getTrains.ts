import { gql } from "@apollo/client";

export const GET_TRAINS = gql`
    query getTrains {
        trains {
            id
            type
            capacity
            maxSpeed
        }
    }
`