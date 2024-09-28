import { gql } from "@apollo/client";

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