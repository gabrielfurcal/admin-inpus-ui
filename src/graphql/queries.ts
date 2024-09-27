import { gql } from "@apollo/client";

export const GET_TRAINS = gql`
    query {
        trains {
            id
            type
            capacity
            maxSpeed
        }
    }
`

export const GET_TRAIN_BY_ID = gql`
    query getTrainById($id: Int!) {
        trainById(id: $id) {
            id
            type
            capacity
            maxSpeed
        }
    }
`